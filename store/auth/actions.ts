// Imports
import * as actionTypes from './actionTypes';
import { stateProps } from "../../types/authStoreTypes"

// Action Creators

// Action Creator: Login -> Creates an object for Login Reducer
export const Login = (User: stateProps) => ({
  type: actionTypes.LOGIN,
  payload: User,
});

// Action Creator: Update -> Creates an object for Update Reducer
export const UpdateUser = (User: stateProps) => ({
  type: actionTypes.UPDATE_USER,
  payload: User,
});

// Action Creator: Logout -> Creates an object for Logout Reducer
export const Logout = () => ({
  type: actionTypes.LOGOUT,
});
