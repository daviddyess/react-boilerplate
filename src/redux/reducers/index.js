import { combineReducers } from 'redux';

// Repeat imports for each reducer
import { reducer as example, initialState as exampleState } from './example';

// Add Each to be included in initialState (comma separated: example: exampleState, app: appState, toast: toastState)
export const initialState = {
  example: exampleState
};

// Add each using 'as' of import above (comma separated: example, app, toast)
export default combineReducers({
  example
});
