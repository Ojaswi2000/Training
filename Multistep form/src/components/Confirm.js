import React, { Component } from 'react'

export class Confirm extends Component {

  continue=e=>{
    e.preventDefault();
    this.props.nextStep();
  }

  back=e=>{
    e.preventDefault();
    this.props.prevStep();
  }
  render() {
    const {values:{firstName,lastName,city,occupation,bio,email}}=this.props;
    return (
      <div className='page1'>
        <h1>Confirm</h1>
        <ul>
          <li><span style={{fontWeight:'bold'}}>The Firstname of the user is:<br/></span>{firstName}</li>
          <li><span style={{fontWeight:'bold'}}>The LastName of the user is:<br/></span>{lastName}</li>
          <li><span style={{fontWeight:'bold'}}>The Email of the user is:<br/></span>{email}</li>
          <li><span style={{fontWeight:'bold'}}>The Occupation of the user is:<br/></span>{occupation}</li>
          <li><span style={{fontWeight:'bold'}}>The City of the user is:<br/></span>{city}</li>
          <li><span style={{fontWeight:'bold'}}>The Bio of the user is:<br/></span>{bio}</li>
        </ul>
        <br/>
        <button onClick={this.continue}>Continue</button>
        <button onClick={this.back}
        style={{backgroundColor:'transparent'}}
        >Back</button>
      </div>
    )
  }
}

export default Confirm
