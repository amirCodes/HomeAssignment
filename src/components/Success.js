import React from 'react';
import '../style.scss';

export default function Success({ values, handleChange, nextStep, prevStep }) {


  // Resume the form for a new application
  const done = e => {
    e.preventDefault();
    // console.log(this.props.values)
    window.location.reload();
  };

  return (
    <div className="login-form">
      <h1>Thank You For Your Submission</h1>
      <p>You will get an email with further instructions.</p>
      <button className="btn btn-primary btn-ghost" onClick={done}>Done</button>

    </div>
  );

}