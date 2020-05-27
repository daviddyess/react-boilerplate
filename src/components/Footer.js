import React, { Component } from 'react';
import { Col, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Footer extends Component {
  render() {
    return (
      <Container fluid>
        <Col className="border-top border-light mt-3 pt-2 pb-2 text-right">
          <p>
            &copy; 2020 {process.env.REACT_APP_HTML_TITLE} | Powered by{' '}
            <FontAwesomeIcon color="red" icon={['far', 'heart']} /> &amp;{' '}
            <a href="https://github.com/daviddyess/react-boilerplate">
              Open Source
            </a>
          </p>
        </Col>
      </Container>
    );
  }
}
