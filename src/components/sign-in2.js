import React, { Fragment } from 'react'
import { useHistory } from 'react-router-dom'
import { auth } from '../firebase/firebaseConfig';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import PropTypes from 'prop-types'
import './sign-in2.css'

const SignIn2 = (props) => {
  const history = useHistory();

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      console.log("Google Sign-In successful:", result.user);
      // Use history.push instead of navigate
      history.push('/questionnaire');
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  return (
    <div className="sign-in2-container1 thq-section-padding">
      <div className="sign-in2-max-width thq-section-max-width">
        <div className="sign-in2-form-root">
          <h2 className="sign-in2-text10 thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="sign-in2-text26">Welcome back!</span>
              </Fragment>
            )}
          </h2>
          <div className="sign-in2-container2">
            <button 
              onClick={handleGoogleSignIn} 
              className="sign-in2-button2 thq-button-outline"
            >
              <svg
                viewBox="0 0 860.0137142857142 1024"
                className="sign-in2-icon3"
              >
                <path d="M438.857 449.143h414.286c4 22.286 6.857 44 6.857 73.143 0 250.286-168 428.571-421.143 428.571-242.857 0-438.857-196-438.857-438.857s196-438.857 438.857-438.857c118.286 0 217.714 43.429 294.286 114.857l-119.429 114.857c-32.571-31.429-89.714-68-174.857-68-149.714 0-272 124-272 277.143s122.286 277.143 272 277.143c173.714 0 238.857-124.571 249.143-189.143h-249.143v-150.857z"></path>
              </svg>
              <span className="thq-body-small">Continue with Google</span>
            </button>
          </div>
          
          <div className="sign-in2-form1">
            <div className="sign-in2-have-an-account-login"></div>
          </div>
        </div>
        <div className="sign-in2-container5">
          <div className="sign-in2-divider4"></div>
          <span className="thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="sign-in2-text24">
                  Sign in to access your personalized workout plans and track
                  your progress.
                </span>
              </Fragment>
            )}
          </span>
        </div>
      </div>
    </div>
  )
}

SignIn2.defaultProps = {
  action2: undefined,
  content1: undefined,
  action1: undefined,
  heading1: undefined,
}

SignIn2.propTypes = {
  action2: PropTypes.element,
  content1: PropTypes.element,
  action1: PropTypes.element,
  heading1: PropTypes.element,
}

export default SignIn2
