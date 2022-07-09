import React from 'react';
import {Navbar, Container} from 'react-bootstrap';

let Navs = () => {
  return (
    <Navbar id="nav_bar" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand style={{fontFamily:"'Ubuntu', sans-serif", fontWeight:"300", fontSize:"2em"}} href="/">My Words</Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Navs