import {useEffect, useState} from 'react';

export const useFetch = (url) => {

  const initialState = { 
    data: null, 
    loading: true, 
    error: null 
  };
  const [state, setState] = useState(initialState);
  console.log('useFetch', state);

  useEffect(() => {
    
    setState({ 
      data: null, 
      loading: true, 
      error: null 
    });

    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        console.log('useFetch','useEffect', data);
        setState({
          loading: false,
          error: null,
          //data: data
          data
        });
      })

  }, [url]);

  return state;

}
