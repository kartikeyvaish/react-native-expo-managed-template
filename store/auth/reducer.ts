// Imports
import * as actionTypes from './actionTypes';
import { stateProps, actionProps } from "../../types/authStoreTypes"

// Initial Auth State
const InitialState: stateProps = {
    User: null,
};

// Auth Reducer
const authReducer = (state = InitialState, action: actionProps) => {
    switch (action.type) {

        // User Login
        case actionTypes.LOGIN: {
            const myState = { ...state };
            myState.User = action.payload;
            return myState;
        }

        // Update User
        case actionTypes.UPDATE_USER: {
            const myState = { ...state };
            myState.User = { ...myState.User, ...action.payload };
            return myState;
        }

        // User Logout
        case actionTypes.LOGOUT: {
            const myState = { ...state };
            myState.User = null;
            return myState;
        }

        // Default
        default:
            return state;
    }
};

// Exports
export default authReducer;
