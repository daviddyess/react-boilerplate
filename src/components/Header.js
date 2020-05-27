import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, Dropdown, Form, Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class Header extends Component {
  get userIcon() {
    return <FontAwesomeIcon icon="user-circle" />;
  }

  render() {
    return (
      <Container fluid>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand as={Link} to="/">
            React Boilerplate
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
            </Nav>
            <Form inline action="/search" method="get">
              <Form.Control
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                name="q"
              />
            </Form>
            <Nav>
              <Dropdown alignRight>
                <Dropdown.Toggle variant="primary" id="user-dropdown">
                  {this.userIcon} User
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={NavLink} to="/user">
                    Account
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item as={NavLink} to="/login">
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}

export default Header;
