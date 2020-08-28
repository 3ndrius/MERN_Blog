import React from 'react'
import { useFetch } from '../hooks'

export default function SinglePost(props) {

    const { postId } = props?.match.params.id
    const { response, isLoading } = useFetch(props.match.params.id)

    //     const makeEdit = () => {
    //        var editor = document.getElementById('editor')
            
    // document.designMode = 'on';
    //        console.log(document.getElementById("editor").innerHTML)
    //     }
        
    return (
        <div className="container pt-2">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="mb-5">{response?.data.data.title}</h1>
                    <p>{response?.data.data.body}</p>
                    <hr/>
                    <p id="editor">{response?.data.data.author}</p>
                </div>
                {/* <button onClick={makeEdit}>Edit</button> */}
            </div>
        </div>
    )
}
