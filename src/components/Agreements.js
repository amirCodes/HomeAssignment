import React from 'react'
import '../style.scss';
import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default function Agreements({ values, handleChange, nextStep, prevStep }) {

    // Here we will post to the user data using the the endpoint user 
    const postData = () => {
        fetch('https://5f79819fe402340016f93139.mockapi.io/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        })
            .then(response => response.json())
            .then(values => {
                console.log('Success:', values);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    const Next = (e) => {
        e.preventDefault();
        // console.log(values)
        postData();
        nextStep();
    }
 
    const Back = (e) => {
        e.preventDefault();
        prevStep();
    }


    return (
        <div className="login-form">
            <h1>What's your date of birth</h1>

            <FormControlLabel
                control={<Checkbox name="agreement1" onChange={handleChange('agreement1')} value={values.agreement1} />}
                label="I agrree to the "
            />
                        <FormLabel component="legend" color="66cfc0">Electronic Transaction Esign Consent</FormLabel>

            <FormControlLabel
                control={<Checkbox name="agreement2" onChange={handleChange('agreement2')} value={values.agreement2} />}
                label="I agrree to the folowing agreements:"
            />
            <FormLabel component="legend" color="66cfc0"><span style={{color:"66cfc0"}}>Privacy Notice</span></FormLabel>
            <FormLabel component="legend">Terms and Conditions</FormLabel>
            <FormLabel component="legend">Membership Agreement</FormLabel>

            <div className="btn-div" style={{ width: '100%' }}>
                <button className="btn btn-primary btn-ghost"
                    onClick={Back}>Back</button>
                <button className="btn btn-primary btn-ghost"
                    onClick={Next}
                >Agree & Create Account</button>
            </div>

        </div>
    )
}
