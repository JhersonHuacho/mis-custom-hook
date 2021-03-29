import { useState } from 'react';

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);
  //Podemos poner cualquier cantidad de lógica aquí en el customHook
  // Podemos pasarle otros argumentos que sean las reglas de validación, o que campos son obligatorios  

  const reset = () => {
    console.log('useForm', 'reset');
    setValues(initialState);
  }

  const handleInputChange = (e) => {
    // console.log(e.target);
    // console.log(e.target.type);
    console.log('useForm', 'handleInputChange',e.target.name);
    console.log('useForm', 'handleInputChange',e.target.value);
    
    setValues({
      ...values,
      [e.target.name]:e.target.value
    });

  }

  return [values, handleInputChange, reset];

}
