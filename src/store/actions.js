import { INCREMENT, DECREMENT } from './types';

export const increment = payload => ({
  type: INCREMENT,
  payload,
});

export const decrement = payload => ({
  type: DECREMENT,
  payload,
});
