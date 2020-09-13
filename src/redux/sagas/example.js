import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import request from '../../utils/request';
import { actions, types } from '../reducers/example';
import { getExample } from '../selectors/example';
/**
 * Request Example Worker
 * @uses request to generate API url onto endpoint
 * @throws error to actions.requestExampleFailure
 * @returns actions.requestExampleSuccess(data)
 */
function* requestExampleWorker() {
  try {
    /**
     * Use the getExample Selector to get current Collection from State
     */
    const collection = yield select(getExample);
    /**
     * If Collection is empty, use an API call to fetch the data
     * @uses REACT_APP_API_URL in ENV (.env) for the API server address
     */
    if (collection.length === 0) {
      let endpoint = {};
      endpoint = {
        url: '/api/path/example',
        method: 'GET'
      };
      const result = yield call(request.execute, { endpoint });

      if (result.success) {
        const {
          response: { data }
        } = result;
        /**
         * Use Success Action to store data in the State
         */
        yield put(actions.requestExampleSuccess(data));
      } else if (result.error) {
        throw result.error;
      } else {
        throw new Error('Failed to fetch Bible Example!');
      }
    }
  } catch (error) {
    /**
     * Use Failure Action to store error in the State
     */
    yield put(actions.requestExampleFailure(error));
  }
}
/**
 * Request Example Watcher
 */
function* requestExampleWatcher() {
  yield takeLatest(types.REQUEST_EXAMPLE, requestExampleWorker);
}
/**
 * Export Workers in an object
 */
export const workers = {
  requestExampleWorker
};
/**
 * Export Watchers in an object
 */
export const watchers = {
  requestExampleWatcher
};
/**
 * Export Watchers
 */
export default function* saga() {
  yield all(Object.values(watchers).map((watcher) => watcher()));
}
