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

  render(){
    return (
      <form>
        <label>First Name: </label>
        <input type='text' name='firstName' value={this.state.firstName} onChange={this.handleChange}/>
        <br/>
        <label>Last Name: </label>
        <input type='text' name='lastName' value={this.state.lastName} onChange={this.handleChange}/>
        <br/>
        <label>Phone Number: </label>
        <input type='text' name='phoneNumber' value={this.state.phoneNumber} onChange={this.handleChange}/>
      </form>
    )
  }
}

export default ContestantForm
