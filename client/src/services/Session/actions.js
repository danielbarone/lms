import { CLEAR, SET } from './actionTypes';

export const setSession = (session) => ({
  session,
  type: SET,
});

export const clearSession = () => ({
  type: CLEAR,
});
