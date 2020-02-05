import { createSelector } from 'reselect';
/**
 * Export Example State
 * @param {*} state 
 */
export const getExampleState = state => state.example;
/**
 * Export Collection from Example State
 */
export const getExample = createSelector(
  getExampleState,
  example => example.collection
);
