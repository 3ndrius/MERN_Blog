import React from 'react'
import { Link } from 'react-router-dom'

export default function form(props) {

    return (
        <>
            <div className="row" >
                <div className="col-md-6 offset-md-3">
                    <h2 className="pb-4">{props.post ? "Add post" : "Update post"}</h2>
                </div>
            </div>
            <div >
                <div className="col-md-6 offset-md-3 ">
                    <form onSubmit={(e) => props.handleSubmit(e)}>
                        <div className="mb-3" >
                            <label htmlFor="title" className="form-label">Title</label>
                            <input type="text" className="form-control" id="title" placeholder="Title" onChange={(e) => props.handleChange(e)} />
                        </div>
                        <div className="mb-3" >
                        <label htmlFor="validationTextarea" className="form-label">Textarea</label>
                        <textarea className="form-control text-area--custom" id="body" placeholder="Post content" onChange={(e) => props.handleChange(e)}></textarea>
                        </div>
                        <button type="submit" className={props.post ? "btn btn-primary" : "btn btn-info"}>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}
