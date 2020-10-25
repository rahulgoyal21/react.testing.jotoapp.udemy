import { actionTypes } from '../actions';
/**
 * @function successReducer
 * @param {boolean} state - Array of guessed words.
 * @param {object} action - Action to be reduced.
 * @returns {boolean} - new success state
 */

export const successReducer = (state = false, action) => {
  const { type } = action;
  switch (type) {
    case actionTypes.CORRECT_GUESS:
      return true;
    default:
      return state;
  }
};
