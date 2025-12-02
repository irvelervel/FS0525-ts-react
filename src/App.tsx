import { Col, Container, Row } from 'react-bootstrap'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ClassComponent from './components/ClassComponent'
import FunctionalComponent from './components/FunctionalComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound'
import MyNavbar from './components/MyNavbar'

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <h1 className="text-center">TS + REACT</h1>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12}>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <FunctionalComponent name="Marco" color="red" />
                    <FunctionalComponent name="Giorgio" color="green" />
                    <FunctionalComponent name="Stefano" />
                  </>
                }
              />
              <Route
                path="/class"
                element={
                  <>
                    <ClassComponent name="Stefano" color="red" />
                    <ClassComponent name="Mario" color="green" />
                    <ClassComponent name="Federico" />
                  </>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  )
}

export default App
