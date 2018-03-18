import React, { Component } from 'react';
import Home from './components/Home';
import ClickedPage from './components/ClickedPage';


class App extends Component {
  state = {
    buttonHasBeenClicked: false
  }
  
  handleClick = () => {
    this.setState({buttonHasBeenClicked: !this.state.buttonHasBeenClicked})
  }
  render() {
    console.log(this.state)
    return (
      <div className="App">
        {!this.state.buttonHasBeenClicked ? <Home handleClick={this.handleClick}/> : <ClickedPage />}
      </div>
    );
  }
}

export default App;
