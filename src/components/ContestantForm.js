import React, {Component} from 'react';
import { Button } from 'semantic-ui-react';

class ContestantForm extends Component{
  state = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    termsOfAgreement: false
  }

  handleChange = (e) => {this.setState({[e.target.name]: e.target.value})}

  setTrue = () => {
    this.setState({termsOfAgreement: true})
  }

  setFalse = () => {
    this.setState({termsOfAgreement: false})
  }

  render(){
    return (
      <form onSubmit={this.props.handleSubmit}>
        <label>First Name: </label>
        <input type='text' name='firstName' value={this.state.firstName} onChange={this.handleChange}/>
        <br/>
        <label>Last Name: </label>
        <input type='text' name='lastName' value={this.state.lastName} onChange={this.handleChange}/>
        <br/>
        <label>Phone Number: </label>
        <input type='text' name='phoneNumber' value={this.state.phoneNumber} onChange={this.handleChange}/>
        <br/>
        <label>Acceptance of Terms of Agreement: </label>
        <div className='TOA'>
          Lorem ipsum agreement stuff
        </div>
        <input type='radio' name='termsOfAgreement' value='agree' onClick={this.setTrue}/>Agree <br/>

        <input type='radio' name='termsOfAgreement' value='disagree' onClick={this.setFalse}/>Disagree
        <br/>
        <Button type='submit' color='green'>Enter Contest</Button>
      </form>
    )
  }
}

export default ContestantForm
