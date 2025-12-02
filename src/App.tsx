import { Col, Container, Row } from 'react-bootstrap'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import ClassComponent from './components/ClassComponent'
import FunctionalComponent from './components/FunctionalComponent'

function App() {
  return (
    <>
      <h1 className="text-center">TS + REACT</h1>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12}>
            <FunctionalComponent name="Marco" color="red" />
            <FunctionalComponent name="Giorgio" color="green" />
            <FunctionalComponent name="Stefano" />
            {/* <ClassComponent name="Stefano" color="red" />
            <ClassComponent name="Mario" color="green" />
            <ClassComponent name="Federico" /> */}
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
