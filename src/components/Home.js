import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import Garden from '../img/garden.png'
import Suite from '../img/suitePhoto.png'

const Home = ({ handleClick }) => {

  return (
    <div>
      <div className='topPic'>
        <img src={Garden} style={{ width: `100%` }} alt='Garden'/>
      </div>
      <div className='Home'>
        <Button color='green' className='Button' onClick={()=> handleClick()}>
          Click me!
        </Button>
      </div>
      <div className='bottomPic'>
        <img src={Suite} style={{ width: `100%`}} alt='Suite' />
      </div>
    </div>
  )
}

export default Home