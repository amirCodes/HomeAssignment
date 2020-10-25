import React from 'react';
import '../style.scss';
import Logo from './MoneyLionLogo';
export default function Success({ values, handleChange, nextStep, prevStep }) {


  // Resume the form for a new application
  const done = e => {
    e.preventDefault();
    // console.log(this.props.values)
    // here we realod and set the step state to 0 for resume and ready for new application
    window.location.reload();
  };

  return (
    <div className="login-form">
      <Logo />
      <h1>Thank You For Your Submission</h1>
      <p>You will get an email with further instructions.</p>
      <button className="btn btn-primary btn-ghost" onClick={done}>Done</button>

    </div>
  );

}