import { Button } from 'react-bootstrap'

interface FunctionalComponentProps {
  name: string
  color?: string // prop opzionale
}

const FunctionalComponent = function ({
  name,
  color,
}: FunctionalComponentProps) {
  return (
    <>
      <h2 className="text-center">Esempio componente a FUNZIONE</h2>
      <h3 style={{ color: color || 'black' }}>Salutiamo {name}!</h3>
      <Button onClick={() => {}}>CLICCATO: SI</Button>
    </>
  )
}

export default FunctionalComponent
