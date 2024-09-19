import React from 'react'
import './LoginSignup.scss'

import user_icon from '../../assets/person.png'
import email_icon from '../../assets/email.png'
import password_icon from '../../assets/password.png'

const LoginSignup = () => {
  return (
    <div className="container">
        <div className="header">
            <div className="text">Sign Up</div>
            <div className="underline">Sign Up</div>
        </div>
        <div className="inputs">
            <div className="input"></div>
            <img src={user_icon} alt="" />
            <input type="text" />
        </div>
        <div className="inputs">
            <div className="input"></div>
            <img src={email_icon} alt="" />
            <input type="email" />
        </div>
        <div className="inputs">
            <div className="input"></div>
            <img src={password_icon} alt="" />
            <input type="password" />
        </div>
    </div>
  )
}

export default LoginSignup