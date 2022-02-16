import React, { Component } from 'react'
import '../styles.css';
export class FormUserDetails extends Component {

  continue = e =>{
    e.preventDefault();
    this.props.nextStep();
  }

  render() {
    const {values,handleChange}= this.props;
    return (
      <div className='page1'>
        <h1>Enter user details</h1>
        <input 
        placeholder='Enter first Name'
        onChange={handleChange('firstName')} required
        />
        <br/>
    
        <input 
        placeholder='Enter Last Name'
        onChange={handleChange('lastName')} required
        />
        <br/>
        <input 
        placeholder='Enter Email '
        onChange={handleChange('email')} required
        />
        <br/>
        <button onClick={this.continue}>Continue</button>
      </div>
    )
  }
}

export default FormUserDetails

