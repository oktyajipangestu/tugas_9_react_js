import { Component } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Breadcrumb,
  Container,
  Row,
  Col
} from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" expand="lg" variant="dark">
          <Navbar.Brand href="#">Akses Sport</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mr-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">Berita</Nav.Link>
              <Nav.Link href="#">Live Score</Nav.Link>
              <NavDropdown title="Piala & Liga" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#">
                  Liga Primer Inggris
                </NavDropdown.Item>
                <NavDropdown.Item href="#">Liga 1 Indonesia</NavDropdown.Item>
                <NavDropdown.Item href="#">Liga Primera</NavDropdown.Item>
                <NavDropdown.Item href="#">Lague 1</NavDropdown.Item>
                <NavDropdown.Item href="#">Bundes Liga</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#">Transfer Pemain</Nav.Link>
              <Nav.Link href="#">Tim</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>

        <Container>
          <Row>
            <Col className='ml-auto' md={4}>
          <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="#">Liga inggris</Breadcrumb.Item>
            <Breadcrumb.Item active>Transfer Pemain</Breadcrumb.Item>
          </Breadcrumb>
            </Col>
          </Row>

        </Container>
      </div>
    );
  }
}

export default App;
