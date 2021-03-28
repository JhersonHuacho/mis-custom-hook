import {useEffect, useRef, useState} from 'react';

export const useFetch = (url) => {

  const initialState = { 
    data: null, 
    loading: true, 
    error: null 
  };
  const isMounted = useRef(true);
  const [state, setState] = useState(initialState);
  console.log('useFetch', state);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    }
  }, []);

  useEffect(() => {
    
    setState(initialState);

    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        console.log('useFetch','useEffect', data);

        setTimeout(() => {
          if (isMounted.current) {
            setState({
              loading: false,
              error: null,
              //data: data
              data
            });     
          } else {
            console.log('useFetch','setState no se llamó');
          }
                 
        }, 4000);        

      })

  }, [url]);

  return state;

}
