import { createStore } from 'redux';

export const reducer = (state = {}, action) => {
  if (action && action.type === 'UPDDATE_KEY') {
    return { ...state, [action.key]: action.value };
  }

  return state;
};

export function initializeStore(initialState = {}) {
  return createStore(reducer, initialState);
}
