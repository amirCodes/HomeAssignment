import React from 'react'
import '../style.scss';
import Logo from './MoneyLionLogo';
export default function WelcomMessage({ values, handleChange,nextStep } ) {
   
    const Next= (e)=>{
        e.preventDefault();
        nextStep();

    }
    return (
        <div className="login-form col-8">
            <Logo />
            <h1>Say Hello to MoneyLion</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <br />
            <button
              className="btn btn-primary btn-ghost"
              onClick={Next} >Apply Now</button>
        </div>
    )
}
