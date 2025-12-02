import { Button } from 'react-bootstrap'
import { useState, useEffect } from 'react'

interface FunctionalComponentProps {
  name: string
  color?: string // prop opzionale
}

// interface MovieObject {
//   title: string
//   year: number
// }

const FunctionalComponent = function ({
  name,
  color,
}: FunctionalComponentProps) {
  const [clicked, setClicked] = useState(false)

  // const [movieObject, setMovieObject] = useState<null | MovieObject>(null)
  // dovremmo dire a TS che movieObject non è di solo UN tipo, ma dovrebbe
  // risultare essere di tipo UNIONE (|) tra null e {title: string, year: number}

  useEffect(() => {}, []) // useEffect non necessita praticamente mai
  // di tipizzazione, il suo utilizzo è già descritto in @types/react

  return (
    <div className="text-center my-5">
      <h2>Esempio componente a FUNZIONE</h2>
      <h3 style={{ color: color || 'black' }}>Salutiamo {name}!</h3>
      <Button
        onClick={() => {
          setClicked(!clicked)
          //   setMovieObject({
          //     title: 'Star Wars',
          //     year: 1985,
          //   })
        }}
      >
        CLICCATO: {clicked ? 'SI' : 'NO'}
      </Button>
    </div>
  )
}

export default FunctionalComponent
