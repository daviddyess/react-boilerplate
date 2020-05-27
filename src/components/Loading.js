import React, { Component } from 'react';
import { Spinner } from 'react-bootstrap';

export default class Loading extends Component {
  render() {
    return (
      <div className="text-center p-4">
        <div className="m-2">
          <Spinner animation="border" role="status" />
          <div>
            <span>Loading...</span>
          </div>
        </div>
      </div>
    );
  }
}
