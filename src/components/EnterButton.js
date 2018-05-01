import { Button } from 'semantic-ui-react';
import React, {Component} from 'react';

const EnterButton = ({showForm, openForm, handleSubmit}) => {
  return (
    <div>
    {!showForm ? <Button color='green' className='Button' onClick={()=> this.openForm()}>
      Click to Enter
    </Button> :
    <Button color='green' className='Button' onClick={()=> this.handleSubmit()}>
      Submit
    </Button>}
    </div>
  )
}

export default EnterButton
