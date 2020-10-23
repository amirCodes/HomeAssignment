import React, { Component } from 'react'
import WelcomeMessage from './WelcomeMessage'
import PersonalDetails from './PersonalDetails'
import DateOfBirth from './DateOfBirth'
import Agreements from './Agreements'
import Success from './Success'

export class UsersForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        Email: '',
        dateOfBirth: '', 
        agreement1: false,
        agreement2: false
    };

    // Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    };

    // Go back to prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    };

    // Handle fields change
    handleChange = input => e => {
        const checked = e.target.checked;
        console.log(e.target.name);
        this.setState({ [input]: e.target.value });
        // check if checkbox is checked asign it to true
        if(e.target.name==='agreement1' && checked){
            this.setState({agreement1:true})
        }
        else if(e.target.name==='agreement2' && checked){
            this.setState({agreement2:true})
        }else {
           this.setState({agreement1:false, agreement2: false})
        }
    };

    render() {
        const { step } = this.state;
        const { firstName, lastName, email, dateOfBirth, agreement1, agreement2 } = this.state;
        
        const values = { firstName, lastName, email, dateOfBirth, agreement1, agreement2 };
        

        switch (step) {
            case 1:
                return (
                    <WelcomeMessage
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 2:
                return (
                    <PersonalDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 3:
                return (
                    <DateOfBirth
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 4:
                return (
                    <Agreements
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                );
            case 5:
                // added this component to show the user a simple message after filling up the form.
                return <Success valuse={values} />;
            default:
                (console.log('This is a multi-step form'))
        }
    }
}

export default UsersForm;