import { createAction, createReducer } from "@reduxjs/toolkit";

export const setUser = createAction("SET_USER");

export const userInitialState = {
  name: null,
  email: null,
  lastname: null,
  admin: null,
 
};

const reducerUser = createReducer(userInitialState, {
  [setUser]: (state, action) => action.payload,
});

export default reducerUser;

