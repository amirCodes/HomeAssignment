import { TextField } from '@material-ui/core';
import React from 'react'
import '../style.scss';

export default function DateOfBirth({ values, handleChange, nextStep, prevStep }) {

    const Next = (e) => {
        e.preventDefault();
        nextStep();
    }
    const Back = (e) => {
        e.preventDefault();
        prevStep();
    }

    return (
        <div className="login-form">
            <h1>What's your date of birth</h1>
            <TextField type="date" name="date" id="date" onChange={handleChange('dateOfBirth')} value={values.dateOfBirth} placeholder=" " autoComplete="off" className="form-control-material" required />

            <div className="btn-div" style={{ width: '100%' }}>
                <button className="btn btn-primary btn-ghost"
                    onClick={Back}>Back</button>
                <button className="btn btn-primary btn-ghost"
                    onClick={Next} >Next</button>
            </div>

        </div>
    )
}
