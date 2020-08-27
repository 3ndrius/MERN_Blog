import React from 'react'
import { useAuthAccess } from '../contexts/AuthContext'


export default function Header() {

    const {auth} = useAuthAccess()
    console.log("From header", auth.login)
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-lg-flex justify-content-lg-end" id="navbarSupportedContent">
               
                <ul className="navbar-nav d-flex">
                     <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                    </li>
                   { auth?.login &&
                    <li className="nav-item dropdown ">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                        User
                    </a>
                    <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" >Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul> 
                    </li>
                    
}
                </ul>
                </div>
            </div>
       </nav>
    )
}
