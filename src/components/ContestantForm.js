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

  render(){
    return (
      <form>
        form
      </form>
    )
  }
}

export default ContestantForm
