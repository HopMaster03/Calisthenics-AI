import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import SignIn2 from '../components/sign-in2'
import './login.css'

const Login = (props) => {
  return (
    <div className="login-container">
      <Helmet>
        <title>Login - Speedy Precious Goldfinch</title>
        <meta property="og:title" content="Login - Speedy Precious Goldfinch" />
      </Helmet>
      <SignIn2
        // action1={
        //   <Fragment>
        //     <span className="login-text1">Forgot password?</span>
        //   </Fragment>
        // }
        // action2={
        //   <Fragment>
        //     <span className="login-text2">Create an account</span>
        //   </Fragment>
        // }
        content1={
          <Fragment>
            <span className="login-text3">
              Sign in to access your personalized workout plans and track your
              progress.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="login-text4">Welcome back!</span>
          </Fragment>
        }
      ></SignIn2>
    </div>
  )
}

export default Login
