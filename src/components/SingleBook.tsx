import { Card } from 'react-bootstrap'
import { type Book } from '../types'

interface SingleBookProps {
  libroDalleProps: Book // qui dovrei mettere sempre Book
}

const SingleBook = function ({ libroDalleProps }: SingleBookProps) {
  return (
    <Card className="my-3">
      <Card.Img variant="top" src={libroDalleProps.imageUrl} />
      <Card.Body>
        <Card.Title>{libroDalleProps.title}</Card.Title>
        <Card.Text>{libroDalleProps.description}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default SingleBook
