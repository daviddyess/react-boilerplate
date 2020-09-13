import React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';
import logo from 'static/logo.svg';

export default function Home() {
  return (
    <Container fluid>
      <Helmet title="Home" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/pages/Home.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          <a
            className="App-link"
            href="https://github.com/daviddyess/react-boilerplate"
          >
            React Boilerplate on GitHub
          </a>
        </p>
      </header>
    </Container>
  );
}
