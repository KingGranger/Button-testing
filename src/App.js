import React, { Component } from 'react';
import Home from './components/Home';
import ClickedPage from './components/ClickedPage';


class App extends Component {
  state = {
    buttonHasBeenClicked: false
  }

  handleSubmit = () => {
    this.setState({buttonHasBeenClicked: !this.state.buttonHasBeenClicked})
  }
  render() {
    return (
      <div className="App">
        {!this.state.buttonHasBeenClicked ? <Home handleSubmit={this.handleSubmit}/> : <ClickedPage />}
      </div>
    );
  }
}

export default App;
