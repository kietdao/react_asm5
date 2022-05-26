import React from 'react'
import { Navigate } from 'react-router-dom'

export default function PrivateRoute(props) {
    console.log(props.user)
    if(props.user === null) {
        return <Navigate to='/login' replace/>
    }
    return props.children
}
