import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails';

export class UserForm extends Component {

    state={
        step:1,
        firstName:"",
        lastName:"",
        occupation:"",
        email:"",
        city:"",
        bio:"",
    }

    nextStep=() =>{
        const {step}= this.state;
        this.setState({
            step:step+1
        });
    }

    prevStep=() =>{
        const {step}= this.state;
        this.setState({
            step:step-1
        });
    }

    handleChange=(input)=>e=>{
        this.setState({
            [input]:e.target.value
        })
    }

  render() {
      const {step}= this.state;
      const {firstName,lastName,occupation,city,bio,email}=this.state;
      const values={firstName,lastName,occupation,city,bio,email};
    
      switch(step){
            case 1:
              return(
                  <FormUserDetails
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={this.values}
                  />
              );
            case 2:
                return <h1>FormPersonalDetails</h1>
            case 3:
                return <h1>Confirm</h1>
            case 4:
                return <h1>Success</h1>
            default:
      }
    
  }
}

export default UserForm
