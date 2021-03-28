import React, { useState, useEffect } from 'react';
import './effects.css'
import { Message } from './Message';

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    name: '',
    email: ''
  })

  const {name, email} = formState;

  // useEffect(() => {
  //   console.log('useEffect', 'hey!');
  // });

  useEffect(() => {
    console.log('useEffect', 'hey se cargo el componente!');
  }, []);

  useEffect(() => {
    console.log('useEffect', 'el estado formState cambió!', formState);
  }, [formState]);

  useEffect(() => {
    // Este es muy util si tenemos un selector, algun combobox 
    // y quieren ejecutar algo
    // cuando el valor de ese select cambie
    console.log('useEffect', 'la propiedad email del estado formState cambió!', email);
  }, [email]);

  const handleInputChange = (e) => {
    // console.log(e.target);
    // console.log(e.target.type);
    console.log('handleInputChange',e.target.name);
    console.log('handleInputChange',e.target.value);
    setFormState({
      ...formState,
      [e.target.name]:e.target.value
    });
  }

  return (
    <>
      <h1>useEffect</h1>
      <hr/>

      <div className="form-group">
        <input 
          type="text" 
          name="name"
          className="form-control"
          placeholder="Tu nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input 
          type="text" 
          name="email"
          className="form-control"
          placeholder="email@gmail.com"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>
      { (name === '123') && <Message /> }
    </>
  )
}
