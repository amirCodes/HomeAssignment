import React from 'react'
import '../style.scss';
import TextField from '@material-ui/core/TextField';
import Logo from './MoneyLionLogo';


export default function PersonalDetails({ values, handleChange, nextStep, prevStep }) {

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
            <Logo />
            <h1>Create Your Account</h1>
            <TextField id="standard-secondary" className="field-light" label="First Name" color="primary"
                fullWidth
                multiline
                onChange={handleChange('firstName')} value={values.firstName} placeholder=" " autoComplete="off" className="form-control-material" required
            />

            <TextField id="standard-secondary" className="field-light" label="Last Name" color="primary"
                fullWidth
                multiline
                onChange={handleChange('lastName')} value={values.lastName} placeholder=" " autoComplete="off" className="form-control-material" required />

            <TextField id="standard-secondary" className="field-light" label="Email Address" color="primary"
                fullWidth
                multiline
                onChange={handleChange('email')} value={values.email} placeholder=" " autoComplete="off" className="form-control-material" required />

            <div className="btn-div" style={{ width: '100%' }}>
                
                <button className="btn btn-primary btn-ghost"
                    onClick={Back}>Back</button>

                <button className="btn btn-primary btn-ghost"
                    onClick={Next}>Next</button>
            </div>
        </div>
    )
}
