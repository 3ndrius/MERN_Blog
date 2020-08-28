import React, {useState} from 'react'
import PostForm from '../components/PostForm'
import API from '../helpers/API'
import { useFetch } from '../hooks'

export default function UpdatePost(props) {
    const [formData, setFormData] = useState({ title: "", content: ""})

     const { postId } = props?.match.params.id
    const { response, isLoading } = useFetch(props.match.params.id)

    const handleChange = (e) => {
        setFormData({...formData, [e.target.id]: e.target.value})
        console.log(formData)
    }

    const updatePost = async (e) => {
        e.preventDefault()
      try {
      const { title, body } = formData;
      const config = { headers: { "Content-Type": "application/json" } };
      const bodys = { title, body };
        const res = await API.path(`/posts/${postId}`, bodys, config)
        console.log(res)
      } catch (e) {
        console.log(e);
      }
    };

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
