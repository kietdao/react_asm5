import React from 'react'
import { Formik, Form, Field} from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import './signup.css'

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Too short!')
    .max(15, 'Too long!')
    .required('*Please fill your username'),
  password: Yup.string()
    .min(3, '*Too short!')
    .max(15, '*Too long!')
    .matches(/([a-z])/, '*Password must contain lowercases')
    .matches(/([0-9])/, '*Password must contain number')
    .required('*Please fill your password'),
})

export default function SignUp() {
  const navigate = useNavigate()
  return (
    <div className='signup-form'>
      <Formik
        initialValues={{
          username: '',
          password: ''
        }}

        validationSchema={SignupSchema}

        onSubmit={values => {
          const userList = JSON.parse(localStorage.getItem('userList'))
          userList.push({username: values.username, password: values.password})
          localStorage.setItem('userList', JSON.stringify(userList))
        }}
      >
        {({errors, touched}) => {
          return (
            <Form>
              <div className='form-group'>
                <label>Username </label>
                <Field name='username'/>
                {errors.username && touched.username ? (
                  <div className='error-msg'>{errors.username}</div>
                ) : null}
              </div>
              <div className='form-group'>
                <label>Password </label>
                <Field name='password' type='password'/>
                {errors.password && touched.password ? (
                  <div className='error-msg'>{errors.password}</div>
                ) : null}
              </div>
              <p className='form-note'>Have created an account? <a onClick={() => navigate('/login')}>Log In</a></p>
              <button type='submit' className='btn'>Sign Up</button>
            </Form>
          )
        }}
      </Formik>
  </div>
  )
}
