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
  Col,
  Tabs,
  Tab,
  Table,
  ProgressBar
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
            <Col className="ml-auto" md={4}>
              <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Liga inggris</Breadcrumb.Item>
                <Breadcrumb.Item active>Transfer Pemain</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>

          <Row>
            <Col>
              <h3>Rumor Transfer Pemain</h3>
            </Col>
          </Row>

          <Row>
            <Col>
              <Tabs
                defaultActiveKey="semua"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab eventKey="semua" title="Semua Transfer">
                  <Table hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Nama Pemain</th>
                        <th>Tim</th>
                        <th>Transfer</th>
                        <th>Proses Transfer</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>MAROUNE FELLANI</td>
                        <td>MANCHESTER UNITED</td>
                        <td>SHANDONG LUNENG</td>
                        <td>
                        <ProgressBar animated now={85} label={`${85}%`} />
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>LUIS NANI</td>
                        <td>SPORTING CP</td>
                        <td>ORLANDO CITY</td>
                        <td>
                        <ProgressBar animated now={56} label={`${56}%`} />
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>MAREK HAMSIK</td>
                        <td>NAPOLI</td>
                        <td>DALIAN YIFANG</td>
                        <td>
                        <ProgressBar animated now={95} label={`${95}%`} />
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>SARDAR AZMOUN</td>
                        <td>RUBIN KAZAN</td>
                        <td>ZEINT ST PETERSBURG</td>
                        <td>
                        <ProgressBar animated now={100} label={`${100}%`} />
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>MICHY BATSHUAYI</td>
                        <td>CHELSEA</td>
                        <td>CRYSTAL PALACE</td>
                        <td>
                        <ProgressBar animated now={50} label={`${50}%`} />
                        </td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>LUCAS PIAZON</td>
                        <td>CHELSEA</td>
                        <td>CHIEVO</td>
                        <td>
                        <ProgressBar animated now={100} label={`${100}%`} />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Tab>
                <Tab eventKey="liga-primer" title="Liga Primer">
                <Table hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Nama Pemain</th>
                        <th>Tim</th>
                        <th>Transfer</th>
                        <th>Proses Transfer</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>MAROUNE FELLANI</td>
                        <td>MANCHESTER UNITED</td>
                        <td>SHANDONG LUNENG</td>
                        <td>
                        <ProgressBar animated now={85} label={`${85}%`} />
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>JADON SANCHO</td>
                        <td>MANCHESTER UNITED</td>
                        <td>SHANDONG LUNENG</td>
                        <td>
                        <ProgressBar animated now={85} label={`${85}%`} />
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>MICHY BATSHUAYI</td>
                        <td>CHELSEA</td>
                        <td>CRYSTAL PALACE</td>
                        <td>
                        <ProgressBar animated now={50} label={`${50}%`} />
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>LUCAS PIAZON</td>
                        <td>CHELSEA</td>
                        <td>CHIEVO</td>
                        <td>
                        <ProgressBar animated now={100} label={`${100}%`} />
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>VICTOR MOSES</td>
                        <td>CHELSEA</td>
                        <td>SPARTAK MOSKOW</td>
                        <td>
                        <ProgressBar animated now={90} label={`${90}%`} />
                        </td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>DAVID LUIZ</td>
                        <td>ARSENAL</td>
                        <td>PARIS SAINT GERMAIN</td>
                        <td>
                        <ProgressBar animated now={75} label={`${75}%`} />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Tab>
                <Tab eventKey="serie-a" title="Serie A">
                <Table hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Nama Pemain</th>
                        <th>Tim</th>
                        <th>Transfer</th>
                        <th>Proses Transfer</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>MAREK HAMSIK</td>
                        <td>NAPOLI</td>
                        <td>DALIAN YIFANG</td>
                        <td>
                        <ProgressBar animated now={95} label={`${95}%`} />
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>ACHRAF HAKIMI</td>
                        <td>INTER MILAN</td>
                        <td>PSG</td>
                        <td>
                        <ProgressBar animated now={50} label={`${50}%`} />
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>SANDRO TONALI</td>
                        <td>BRESKIA</td>
                        <td>AC MILAN</td>
                        <td>
                        <ProgressBar animated now={65} label={`${65}%`} />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Tab>
                <Tab eventKey="divisi-primera" title="Divisi Primera"></Tab>
                <Tab eventKey="bundesliga" title="Bundesliga"></Tab>
                <Tab eventKey="liga-indonesia" title="Liga 1 Indonesia"></Tab>
              </Tabs>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
