import { buildActions } from '../../utils';
// 'example' here names the reducer
// 'types' should provide a description of their use
export const types = buildActions('example', [
  'REQUEST_EXAMPLE',
  'REQUEST_EXAMPLE_SUCCESS',
  'REQUEST_EXAMPLE_FAILURE'
]);
// 'actions' are mapped to 'types'
// parameters are defined here as well
const requestExample = () => ({
  type: types.REQUEST_EXAMPLE
});

const requestExampleSuccess = (names) => ({
  type: types.REQUEST_EXAMPLE_SUCCESS,
  names
});

const requestExampleFailure = (error) => ({
  type: types.REQUEST_EXAMPLE_FAILURE,
  error
});
// Actions
export const actions = {
  requestExample,
  requestExampleSuccess,
  requestExampleFailure
};
// Initial State
// The beginning of your State, used in the
export const initialState = {
  collection: []
};
// Reducer combines initialState, Types, and Actions here to define final State
export const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.REQUEST_EXAMPLE_SUCCESS:
      return {
        ...state,
        collection: action.names
      };
    case types.REQUEST_EXAMPLE_FAILURE:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};
