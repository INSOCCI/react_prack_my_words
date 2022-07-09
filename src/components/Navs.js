import React from 'react';
import {Navbar, Container} from 'react-bootstrap';

let Navs = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">My Words</Navbar.Brand>
      </Container>
  </Navbar>
  )
}

export default Navs