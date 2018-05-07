import { Button } from 'semantic-ui-react';
import React, {Component} from 'react';

const EnterButton = ({openForm}) => {
  return (
    <div>
      <Button color='green' className='Button' onClick={()=> openForm()}>
        Click to Enter
      </Button>
    </div>
  )
}

export default EnterButton
