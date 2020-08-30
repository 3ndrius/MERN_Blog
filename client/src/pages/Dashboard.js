// import React from 'react'


// export default function Dashboard() {

//     //const { posts } = data.data
    
//     return (
//         <div className="container">
//            <h1>Dashboard protected</h1>
//         </div>
//     )
// }
import React from 'react'
import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/index'

export default function Dashboard() {
    const { response, isLoading } = useFetch()
    // console.log(response?.data.data, isLoading)
    return (
            isLoading ? <div className="container">Loading</div> :
        <div className="container">
            <div className="row">
                <h1>Posts</h1>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <ul className="list list--custom">
                        {response?.data.data.map((post) => {
                            return (
                                <li className="list-item list-item--custom" key={post._id}>
                                    <Link to={`/posts/${post._id}`}> <h1 dangerouslySetInnerHTML={{ __html: post?.title }} /> </Link>
                                    {/* <p dangerouslySetInnerHTML={{ __html: post?.body}} /> */}
                                    <hr />
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}