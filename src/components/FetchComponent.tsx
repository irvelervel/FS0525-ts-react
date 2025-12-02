import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SingleBook from './SingleBook'
import { type Book } from '../types'

const apiURL = 'https://striveschool-api.herokuapp.com/food-books'

const FetchComponent = function () {
  const [books, setBooks] = useState<Book[]>([])
  // quando inizializzate una variabile di stato con [ ]
  // TS automaticamente gli assegna un tipo di "never[]"
  // il tipo "never" rappresenta un valore che non si realizza mai
  // e purtroppo non ci permetterà di utilizzare books in nessuna circostanza
  // -> soluzione: non possiamo lasciare a TS il compito di determinare
  // il valore di books: dobbiamo tipizzare NOI il valore di books!

  const getBooks = () => {
    // recupero i libri dall'API
    fetch(apiURL)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Problema nel recupero dati')
        }
      })
      .then((foodBooks) => {
        console.log(foodBooks)
        setBooks(foodBooks) // salvo i libri ottenuti nello state
      })
      .catch((err) => {
        console.log('ERRORE', err)
      })
  }

  useEffect(() => {
    getBooks()
  }, [])

  return (
    <Container>
      <Row className="justify-content-center">
        <Col>
          <h2 className="text-center">LIBRI DI CUCINA</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          {books.map((book) => {
            return <SingleBook libroDalleProps={book} key={book.id} />
          })}
        </Col>
      </Row>
    </Container>
  )
}

export default FetchComponent
