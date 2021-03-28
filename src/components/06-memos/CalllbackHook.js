import React, { useCallback, useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import './Memorize.css';
import { ShowIncrement } from './ShowIncrement';

export const CalllbackHook = () => {

  const [counter, setCounter] = useState(10);
  // const increment = () => {
  //   setCounter(counter + 1);
  // }

  const increment = useCallback((num) => {
    setCounter(c => c + num);
  }, [setCounter]);

  // el otro caso para usar useCallback es cuando usamod useEffect
  useEffect(() => {
    //???
  }, [increment]);

  return (
    <div>
      <h1>useCallBackk Hook: {counter}</h1>
      <hr/>
      <ShowIncrement increment = {increment} />
    </div>
  )
}
