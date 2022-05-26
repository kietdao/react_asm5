import React from 'react'
import { Navigate } from 'react-router-dom'

export default function AuthRoute(props) {
    console.log(props.user)
    if(props.user !== null) {
        return <Navigate to='/todo' replace/>
    }
    return props.children
}
