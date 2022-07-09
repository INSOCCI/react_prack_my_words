import React from 'react';
import {Navbar, Container} from 'react-bootstrap';

let Navs = () => {
  return (
    <Navbar id="nav_bar" collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/">My Words</Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Navs