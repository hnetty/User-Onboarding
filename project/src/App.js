import React, { useState } from 'react';
import logo from './logo.svg';
import { v4 as uuid } from 'uuid'
import Form from './Form';
import formSchema from './formSchema'
import * as Yup from 'yup'
import './App.css';

const initialInfo = [
  {
    id: uuid(),
    name: 'Harper',
    email: 'harper@harper.com',
    passowrd: 'abc123',
    terms: true,
  },
]

const initialInfoValues = {
  name: '',
  email: '',
  passowrd: '',
  terms: false,
}


function App() {

  const [originalUser, setOriginalUser] = useState(initialInfo)
  const [user, setUser] = useState(initialInfoValues)
  const [formErrors, setFormErrors] = useState(initialInfoValues)
  const [incomplete, setIncomplete] = useState(' ')


  const onInputChange = evt => {

    const { name, value } = evt.target

    Yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]:""
        })
      })

      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      })


    setUser({
      ...user,
      [name]: value,
    })

  }


  const onSubmit = evt => {

    evt.preventDefault()

    if (!user.name || !user.email || !user.passowrd || !user.terms === false){
      setIncomplete('Missing fields required')
      return
    }

    const newUser = { ...user, id: uuid()}

    setOriginalUser(originalUser = [newUser, ...originalUser])

    setUser(initialInfoValues);

  }

  const onCheckboxChange = evt => {

    const { name, checked } = evt.target

    setUser({
      ...user,
      [name]: checked,
    })

  }

  return (
    <div className="App">
      <Form 
        onInputChange={onInputChange}
        onSubmit={onSubmit}
        onCheckboxChange={onCheckboxChange}
        errors={formErrors}
        
        values={user}
      />
    </div>
  );
}

export default App;
