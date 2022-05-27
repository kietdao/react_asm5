import React from 'react'
import { Navigate } from 'react-router-dom'
import { checkToken } from '../Ultis/sesssion'

export default function AuthRoute(props) {
    if(checkToken()) {
        return <Navigate to='/todo' replace/>
    }
    return props.children
}
