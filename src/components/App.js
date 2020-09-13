import React, { Suspense } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Header from 'components/Header';
import Footer from 'components/Footer';

import { Home, NotFound } from 'pages';
import SuspenseFallback from 'components/SuspenseFallback/SuspenseFallback';

export function App() {
  return (
    <Suspense fallback={<SuspenseFallback />}>
      <Helmet
        defaultTitle={process.env.REACT_APP_HTML_TITLE}
        titleTemplate={`%s | ${process.env.REACT_APP_HTML_TITLE}`}
      />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Suspense>
  );
}

export default withRouter(App);
