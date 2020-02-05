import { all, fork } from 'redux-saga/effects';

// Repeat imports for each saga
import example from './example';

// Added each import to the array (comma separated)
export default function* saga() {
  yield all([example].map(fork));
}
