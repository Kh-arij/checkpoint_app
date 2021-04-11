import React from 'react'
import { Form, Button, Navbar, Nav, FormControl } from "react-bootstrap";
function Navbarall() {
    const styles = {
        marginTop:'50px',
        color:'white',
        fontSize:'1rem'
      
      }
    return (
        <div className="container-fluid">
              <Navbar bg="light" bg="dark"  expand="lg">
        <Navbar.Brand href="#home"  style={{color:'white'}}>logo </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home"    style={{color:'white'}}>Home</Nav.Link>
            <Nav.Link href="#link"   style={{color:'white'}}>About</Nav.Link>
            <Nav.Link href="#link"   style={{color:'white'}}>Contact</Nav.Link>
            <Nav.Link href="#link"   style={{color:'white'}}>Service</Nav.Link>

          </Nav>
                 
                 <Form inline  >
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
              <div className="container" style={styles}>

              <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

           </div>
        </div>
    )
}

export default Navbarall
