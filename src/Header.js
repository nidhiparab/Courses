import {Navbar, Nav, Container} from 'react-bootstrap';
import { Link } from "react-router-dom";


function Header() {
    return (

      <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Courses</Navbar.Brand>
    <Nav className="me-auto" as="ul">
    
      <Nav.Item as="li">
        <Nav.Link href="/Login">Login</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/Home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/comps">Computer</Nav.Link>
      </Nav.Item>

      <Nav.Item as="li">
        <Nav.Link href="/IT">IT</Nav.Link>
      </Nav.Item>
      
      <Nav.Item as="li">
        <Nav.Link href="/ECS">ECS</Nav.Link>
      </Nav.Item>

      <Nav.Item as="li">
        <Nav.Link href="/extc">EXTC</Nav.Link>
      </Nav.Item>
         
      
    </Nav>
   
    </Container>
  </Navbar>
 
</>
      
    )
  }
  
  export default Header