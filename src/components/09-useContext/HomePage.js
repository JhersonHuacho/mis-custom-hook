import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const HomePage = () => {

  const userContext = useContext(UserContext);
  console.log(userContext);

  return (
    <div>
      <h1>HomePage</h1>
      <hr/>
      <pre>
        {
          JSON.stringify(userContext, null, 3)
        }
      </pre>
    </div>
  )
}
