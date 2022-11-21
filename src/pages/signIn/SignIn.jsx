import React from 'react'
import './SignIn.css'
import bg from './../../assets/signin.jpg'
import logo from './../../assets/logo.svg'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <div className="w__signin">
      <div className="w__signin-left">
        <Link to='/'><img style={{margin: '2.5rem', height: '1.5rem'}} src={logo} alt="logo" /></Link>
        <div className="w__signin-left__form">
          <div className="w__signin-left__form__container">
            <p className="w__signin-left__form__container-heading">
            Welcome back
            </p>
            <p className="w__signin-left__form__container-subheading">
            Welcome back! Please enter your details.
            </p>
            <div className="w__signin-left__form__container-input">
              <label htmlFor="signin-form-username">Username*</label>
              <input type="text" id="signin-form__container-username" placeholder='eg:-shakir260'/>
            </div>
            <div className="w__signin-left__form__container-input">
              <label htmlFor="signin-form-password">Password*</label>
              <input type="password" id="signin-form__container-password" placeholder='******'/>
            </div>
            <button>Sign in</button>
          </div>
        </div>
      </div>
      <div className="w__signin-right">
        <div className="w__signin-right-overlay"></div>
        <img src={bg} alt="bg" />
      </div>
    </div>
  )
}

export default SignIn