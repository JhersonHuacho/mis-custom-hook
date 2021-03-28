import React, {useState, useEffect} from 'react';

export const Message = () => {

  const [coords, setCoords] = useState({ x:0, y:0 });
  const { x, y } = coords;

  useEffect(() => {
    console.log('useEffect','Componente Message montado');    

    const mouseMove = (e) => {
      console.log('addEventListener', 'mousemove', e.x, e.y);
      const coords = {x: e.x, y: e.y};
      setCoords(coords);
    }

    window.addEventListener('mousemove', mouseMove);

    return () => {
      //cleanup
      // Esto se puede utilizar para cancelar suscripciones entre otras cosas
      console.log('useEffect','Componente Message DESmontado');
      window.removeEventListener('mousemove', mouseMove);
    }
  }, [])

  return (
    <div>
      <h3>Eres genial</h3>
      <p>
        x:{ x } y : { y }
      </p>
    </div>
  )
}
