import React, { useRef } from 'react';
import './FocusScreen.css';

export const FocusScreen = () => {
  const inputRef =  useRef();
  console.log('ref',ref);

  const handleClickSinUseRef = () => {
    //document.querySelector('input').focus();
    document.querySelector('input').select();
  }
  const handleClickConUseRef = () => {    
    inputRef.current.select();
  }

  return (
    <div>
      <h1>Focus Screen</h1>
      <hr/>

      <input 
        type="text"        
        className="form-control"
        placeholder="Su nombre"
      />
      <button 
        className="btn btn-outline-primary mt-5"
        onClick={handleClickSinUseRef}
      >
        Focus Sin useRef
      </button>

      <input 
        type="text"
        ref={inputRef}
        className="form-control"
        placeholder="Su nombre"
      />

      <button 
        className="btn btn-outline-primary mt-5"
        onClick={handleClickConUseRef}
      >
        Focus Con useRef
      </button>
    </div>
  )
}
