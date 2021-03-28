import React from 'react'

export const Message = () => {

  useEffect(() => {
    console.log('useEffect','Componente Message montado');
    return () => {
      //cleanup
      // Esto se puede utilizar para cancelar suscripciones entre otras cosas
      console.log('useEffect','Componente Message DESmontado');
    }
  }, [])

  return (
    <div>
      <h3>Eres genial</h3>
    </div>
  )
}
