import React, { Component } from 'react'
export class FormPersonalDetails extends Component {

  continue= e=>{
    e.preventDefault();
    this.props.nextStep();
  }

  back= e=>{
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const {values,handleChange}=this.props;
    return (
      
        <div className='page1'>
        <h1>Enter Personal Details</h1>
        <input 
        placeholder='Enter occupation'
        onChange={handleChange('occupation')} required
        />
        <br/>
    
        <input 
        placeholder='Enter city name'
        onChange={handleChange('city')} required
        />
        <br/>
        <input 
        placeholder='Enter bio '
        onChange={handleChange('bio')} required
        />
        <br/>
        <button onClick={this.continue}>Continue</button>
        <button onClick={this.back}
        style={{backgroundColor:'transparent'}}
        >Back</button>
      </div>
    )
  }
}

export default FormPersonalDetails;
