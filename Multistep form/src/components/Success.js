import React, { Component } from 'react'

export class Success extends Component {
  render() {
    const {values:{firstName,lastName,email,occupation,bio,city}}=this.props;
    return (
      <div className='page1'>
        <h1>Congratulations! Your Data was submitted successfully</h1>
        <h3 style={{margin:'10px'}}>Your entered details are as follows:</h3>
        <ul>
          <li style={{margin:'5px'}}>Firstname: {firstName}</li>
          <li style={{margin:'5px'}}>Lastname: {lastName}</li>
          <li style={{margin:'5px'}}>Occupation: {occupation}</li>
          <li style={{margin:'5px'}}>email: {email}</li>
          <li style={{margin:'5px'}}>City: {city}</li>
          <li style={{margin:'5px'}}>Bio: {bio}</li>
        </ul>
      </div>
    )
  }
}

export default Success
