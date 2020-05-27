import React, { Component } from 'react';
import { Spinner } from 'react-bootstrap';
import Header from 'components/Header';
import Footer from 'components/Footer';

export default class SuspenseFallback extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="text-center p-4">
          <div className="m-5">
            <Spinner animation="border" role="status" />
            <div>
              <span>Loading...</span>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
