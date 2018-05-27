import React, { Component } from 'react';
import Home from './components/Home';
import ClickedPage from './components/ClickedPage';
import api from './AuthAdapter/api'

const BaseUrl = 'http://localhost:3000'

const headers = {
  'Content-Type': 'application/json',
  Accepts: 'application/json'
}

const enterContestant = (first_name, last_name, phone_number, terms_of_agreement) => {

  const newContestant = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({first_name, last_name, phone_number, terms_of_agreement})
  }
  return fetch(`${BaseUrl}/users`, newContestant).then(res => res.json())
}

class App extends Component {
  state = {
    buttonHasBeenClicked: false,
    contestantId: 0
  }

  handleSubmit = (firstName, lastName, phoneNumber, termsOfAgreement) => {
    console.log(api.auth.enterContestant)
    // api.auth.enterContestant(firstName, lastName, phoneNumber, termsOfAgreement).then(data =>{
    //   debugger
    //   this.setState({buttonHasBeenClicked: !this.state.buttonHasBeenClicked, contestantId: data.id})
    // })
    enterContestant(firstName, lastName, phoneNumber, termsOfAgreement).then(data=> {debugger})
    //this.setState({buttonHasBeenClicked: !this.state.buttonHasBeenClicked})
  }
  render() {
    return (
      <div className="App">
        {!this.state.buttonHasBeenClicked ? <Home handleSubmit={this.handleSubmit}/> : <ClickedPage contestantId={this.state.contestantId}/>}
      </div>
    );
  }
}

export default App;
