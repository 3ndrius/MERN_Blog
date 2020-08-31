import React from 'react'
import { useAuthAccess } from '../contexts/AuthContext'

export default function User() {
    const { auth } = useAuthAccess()

    return (
        <div className="container">
            <h1>User info</h1>
            <h2>Name: {auth?.userInfo.name}</h2>           
            <h2>LastName: {auth?.userInfo.lastName}</h2>
            <h3>Email: {auth?.userInfo.email}</h3>
        </div>
    )
}
