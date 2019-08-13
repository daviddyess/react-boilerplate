import React from 'react';
import { Helmet } from 'react-helmet';

function NotFound() {
  return (
    <div className="App">
      <Helmet title="Page Not Found" />
      <header className="App-header">
        <p>
          404 - Error : Page Not Found
        </p>
      </header>
    </div>
  );
}

export default NotFound;