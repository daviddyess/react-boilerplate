import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, compose, createStore } from 'redux';
import { LastLocationProvider } from 'react-router-last-location';
import rootSaga from './redux/sagas';
import rootReducer from './redux/reducers';

import './icons';
import './index.scss';

import App from './components/App';
import * as serviceWorker from './serviceWorker';

/* eslint-disable no-underscore-dangle */
const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

const sagaMiddleware = createSagaMiddleware();
const enhancers = composer(applyMiddleware(sagaMiddleware));

export const store = createStore(rootReducer, enhancers);

if (module.hot) {
  module.hot.accept('./redux/reducers', () => {
    store.replaceReducer(require('./redux/reducers').default);
  });
}

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Router basename="/">
    <LastLocationProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </LastLocationProvider>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

export default App;
