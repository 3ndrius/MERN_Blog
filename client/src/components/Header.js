import React from 'react'
import { useAuthAccess } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'


export default function Header() {

    const {auth} = useAuthAccess()
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand" >Navbar</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-lg-flex justify-content-lg-end" id="navbarSupportedContent">
               
                <ul className="navbar-nav d-flex">
                  {!auth &&  <li className="nav-item">
                    <Link to="/signin" className="nav-link" href="#">Login</Link>
                    </li>}
                    {!auth && <li className="nav-item">
                    <Link to="/signup" className="nav-link" href="#">Register</Link>
                    </li>}
                   { auth &&
                    <li className="nav-item dropdown dropleft">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                        User
                    </a>
                    <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" >User</a></li>
                        <li><Link to="/dashboard" className="dropdown-item" >Dashboard</Link></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" >Logout</a></li>
                    </ul> 
                    </li>
                    
}
                </ul>
                </div>
            </div>
       </nav>
    )
}
