import React from 'react'
import { useAuthAccess } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'
import API from '../helpers/API'
import { notify } from '../helpers/Notify';

export default function Header() {
    const { auth, setAuth } = useAuthAccess()
    const handleLogout = async () => {
        const config = { headers: { "Content-Type": "application/json" } };
        const response = await API.get("/logout", config);
        notify({ error: response.data.error })
        setAuth({login: false})
        localStorage.removeItem("auth")
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
            <div className="container">
                <Link to="/" className="navbar-brand" >Navbar</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-lg-flex justify-content-lg-end" id="navbarSupportedContent">

                    <ul className="navbar-nav d-flex">
                        {!auth.login && <li className="nav-item">
                            <Link to="/signin" className="nav-link">Login</Link>
                        </li>}
                        {!auth.login && <li className="nav-item">
                            <Link to="/signup" className="nav-link">Register</Link>
                        </li>}

                        {auth.login && <li className="nav-item">
                            <Link to="/add" className="nav-link"> New Post</Link>
                        </li>
                        }
                        {auth.login &&
                            <li className="nav-item dropdown">
                                <span className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                                     {auth.userInfo.name}
                    </span>
                                <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
                                    <li><Link to="/user" className="dropdown-item" >User</Link></li>
                                    <li><Link to="/dashboard" className="dropdown-item" >Dashboard</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><span className="dropdown-item" onClick={handleLogout}>Logout</span></li>
                                </ul>
                            </li>
                        }

                    </ul>
                </div>
            </div>
        </nav>
    )
}
