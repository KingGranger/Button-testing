import { Button } from 'semantic-ui-react';
import React, {Component} from 'react';

const EnterButton = ({showForm, openForm}) => {
  return (
    <div>
    {!showForm ? <Button color='green' className='Button' onClick={()=> this.openForm()}>
      Click to Enter
    </Button> :
    null}
    </div>
  )
}

export default EnterButton
