import axios from 'axios';
import { buildUrl } from '../utils';
import { call, race, delay } from 'redux-saga/effects';

/**
 * Based on code by:
 * @author ayan4m1 <https://github.com/ayan4m1>
 * As of 20191117
 * Modified by:
 * @author daviddyess <https://github.com/daviddyess>
 */

/**
 * Creates a response object indicating successful response from the server.
 *
 * @param {object} response The response body
 */
const successResponse = response => ({
  success: true,
  response
});

/**
 * Creates a response object indicating failure with one specific error message.
 *
 * @param {string} message A string indicating the error message.
 */
const failureMessage = message => ({
  success: false,
  error: {
    message
  }
});

/**
 * Creates a response object indicating failure with an Error or error object.
 *
 * @param {Error|object} error An object describing the error
 */
const failureResponse = error => ({
  success: false,
  error
});

/**
 * Make an XMLHttpRequest to the specified endpoint with the specified request data.
 *
 * @param {object} endpoint An object with `url` and `method` keys
 * @param {object} data An object to use as the request body
 */
class Request {
  constructor() {
    this.execute = this.execute.bind(this);
  }

  isUrlProtected(url) {
    const unprotectedResources = ['oauth', 'register'];

    for (const resource of unprotectedResources) {
      if (url.startsWith(`/${resource}`)) {
        return false;
      }
    }

    return true;
  }

  *execute({ endpoint, data, headers, options = {} }) {
    try {
      // ensure the endpoint was supplied
      if (!endpoint) {
        return failureMessage('No endpoint provided!');
      }

      // ensure properties required by axios are present
      const { url, method } = endpoint;

      if (!url) {
        return failureMessage('Endpoint is missing URL!');
      }

      if (!method) {
        return failureMessage('Endpoint is missing method!');
      }

      // default timeout of 10 seconds
      const { timeout = 10000 } = options;

      const requestUrl = yield call(buildUrl, endpoint);

      // start a race between the request and a timer, cancel the loser
      const { response } = yield race({
        response: call(axios, {
          url: requestUrl,
          headers,
          method,
          data
        }),
        timeout: delay(timeout)
      });

      if (!response) {
        return failureMessage('Request timed out!');
      }

      const { status } = response;
      const success = status >= 200 && status < 400;

      return success ? successResponse(response) : failureResponse(response);
    } catch (error) {
      return failureResponse(error);
    }
  }
}

const instance = new Request();

export default instance;
