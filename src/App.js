import React, { Component } from 'react';
import Home from './components/Home';
import ClickedPage from './components/ClickedPage';
import api from './AuthAdapter/api'


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
    //enterContestant(firstName, lastName, phoneNumber, termsOfAgreement).then(data=> {debugger})
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
