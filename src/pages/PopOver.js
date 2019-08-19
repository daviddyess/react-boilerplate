import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import { Button, OverlayTrigger, Popover } from "react-bootstrap";
import logo from "../static/logo.svg";
import "bootstrap/dist/css/bootstrap.css";

class Home extends Component {
  popover() {
    return (
      <Popover id="popover-basic">
        <Popover.Title as="h3">Popover right</Popover.Title>
        <Popover.Content>
          And here's some <strong>amazing</strong> content. It's very engaging.
          right?
        </Popover.Content>
      </Popover>
    );
  }
  render() {
    return (
      <Fragment>
        <div className="App">
          <Helmet title="PopOver Example" />
          <header className="App-header">
            <OverlayTrigger
              trigger="click"
              placement="right"
              overlay={this.popover()}
            >
              <Button variant="success">Click me to see</Button>
            </OverlayTrigger>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/pages/PopOver.js</code> and save to reload.
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
        </div>
      </Fragment>
    );
  }
}

export default Home;
