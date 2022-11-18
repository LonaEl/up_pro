import React, {useState} from 'react';
import Form from '../components/Form/Form'

const Upload = () => {
    
    const [currentId, setCurrentId] = useState(0);

  return (
    <div> <Form currentId={currentId} setCurrentId={setCurrentId} /></div>
  )
}

export default Upload