import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import SuiteInfo from './SuitesInfo';
import Garden from '../img/garden.png';
import Suite from '../img/suitePhoto.png';
import EnterButton from './EnterButton';
import ContestantForm from './ContestantForm';

class Home extends Component {
  state = {
    showForm: false
  }

  openForm = () => {
    this.setState({showForm: !this.state.showForm})
  }

  render(){
    console.log(this.state.showForm)
      return (
      <div>
        <div className='topPic'>
          <img src={Garden} style={{ width: `100%` }} alt='Garden'/>
        </div>
        <div className='Home'>
          <SuiteInfo />
          {this.state.showForm ? <ContestantForm handleSubmit={this.props.handleSubmit}/> : null}
          {!this.state.showForm ? <EnterButton showForm={this.state.showForm} openForm={this.openForm}/> : null}
        </div>
        <div className='bottomPic'>
          <img src={Suite} style={{ width: `100%`}} alt='Suite' />
        </div>
      </div>
    )
  }
}

export default Home
