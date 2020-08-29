import React from 'react'
import { Link } from 'react-router-dom'

export default function form(props) {

    return (
        <>
            <div className="row" >
                <div className="col-md-6 offset-md-3">
                    <h2 className="pb-4">{props.register ? "CREATE AN ACCOUNT" : "ACCESS USER"}</h2>
                </div>
            </div>
            <div >
                <div className="col-md-6 offset-md-3 ">
                    <form onSubmit={(e) => props.handleSubmit(e)}>
                        {props.register && <div className="mb-3" >
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" onChange={(e) => props.handleChange(e)} />
                        </div>}
                        {props.register && <div className="mb-3">
                            <label htmlFor="lastName" className="form-label">Lastname</label>
                            <input type="text" className="form-control" id="lastName" onChange={(e) => props.handleChange(e)} />
                        </div>}
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={(e) => props.handleChange(e)} />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" onChange={(e) => props.handleChange(e)} />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={(e) => props.handleChange(e)} />
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    <h6 className="mt-3">{props.register ? "Already have account?" : "You don't have accout"} <Link to={props.register ? "/signin" : "/signup"}>{props.register ? "SignIn " : "SignUp"}</Link></h6>
                </div>
            </div>
        </>
    )
}
