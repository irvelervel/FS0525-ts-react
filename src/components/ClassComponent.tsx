import { Component } from 'react'
import { Button } from 'react-bootstrap'

// qualsiasi componente a classe creerete in TS -non si aspetterà- nessuna
// prop in particolare: la tipologia del suo oggetto props sarà di default { }
// diventa quindi essenziale TIPIZZARE l'oggetto delle props che questo
// componente in particolare si aspetterà

// come tipizziamo l'oggetto delle props in un componente a classe?
interface ClassComponentProps {
  name: string
  color?: string // proprietà opzionale, può anche essere undefined
}

interface ClassComponentState {
  clicked: boolean
}

// inserendo ClassComponentProps come primo generic dell'interfaccia
// utilizzata da Component stiamo andando a sovrascrivere il valore di
// default ({ }) delle props che questo componente a classe si aspetta
// nella sua invocazione
class ClassComponent extends Component<
  ClassComponentProps,
  ClassComponentState
> {
  state = {
    clicked: false,
  }

  render() {
    return (
      <div className="text-center my-5">
        <h2>Esempio componente a CLASSE</h2>
        <h3 style={{ color: this.props.color || 'black' }}>
          Salutiamo {this.props.name}!
        </h3>
        <Button
          onClick={() => {
            this.setState({
              clicked: !this.state.clicked,
            })
          }}
        >
          CLICCATO: {this.state.clicked ? 'SI' : 'NO'}
        </Button>
      </div>
    )
  }
}

export default ClassComponent
