import React, { memo } from 'react';

export const Small = memo(({ value }) => {

  console.log('Small.js', 'Me volví a llamar :(');
  // http ?
  
  return (
    <small>
      { value }        
    </small>    
  )

});
