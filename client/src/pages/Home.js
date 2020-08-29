import React from 'react'
import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/index'

export default function Home() {
    const { response, isLoading } = useFetch()
    console.log(response?.data.data, isLoading)
    return (
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
                                    <Link to={`/posts/${post._id}`}> <h2>{post.title}</h2> </Link>
                                    <p>{post?.body?.substring(0, 200) + "..."}</p>
                                    <hr />
                                    <h6>{post.author}</h6>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}
