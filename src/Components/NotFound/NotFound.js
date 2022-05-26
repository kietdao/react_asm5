import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate()  
  setTimeout(() => {
      navigate('/')
  }, 3000)  
  return (
    <div>Not Found</div>
  )
}
