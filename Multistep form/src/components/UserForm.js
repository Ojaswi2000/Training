import React, { Component } from 'react'
import Confirm from './Confirm';
import FormPersonalDetails from './FormPersonalDetails';
import FormUserDetails from './FormUserDetails';
import Success from './Success';

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
        console.log(input);
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
                    values={values}
                  />
              );
            case 2:
                return(
                    <FormPersonalDetails
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    prevStep={this.prevStep}
                    values={values}
                    />
                )
            case 3:
                return(
                    <Confirm 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                    />
                )
            case 4:
                return(
                    <Success
                    values={values}
                    />
                )
            default:
      }
    
  }
}

export default UserForm
