import { success } from './successReducer';
import { actionTypes } from '../actions';

test('returns default initial state of `false` when no action passed', () => {
  const newState = success(undefined, {});
  expect(newState).toBe(false);
});

test('returns state of true upon receiving an action of type `CORRECT_GUESS`', () => {
  const newState = success(undefined, {
    type: actionTypes.CORRECT_GUESS
  });
  expect(newState).toBe(true);
});
