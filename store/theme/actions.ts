// Imports
import * as actionTypes from './actionTypes';
import { stateProps } from "../../types/themeStoreTypes"

// Action Creators

// Action Creators: Change theme  state variable
export const ChangeMode = (Mode: stateProps) => ({
  type: actionTypes.CHANGE_MODE,
  payload: Mode,
});