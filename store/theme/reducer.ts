// Imports
import { Appearance } from 'react-native';

import * as actionTypes from './actionTypes';
import { stateProps, actionProps } from "../../types/themeStoreTypes"

import dark from '../../themes/Dark';
import light from '../../themes/Light';


// Getting the initial scheme
const defaultScheme = Appearance.getColorScheme();

// Defining the initial state
const InitialState: stateProps = {
    Mode: defaultScheme || 'light',
    Theme: defaultScheme === 'dark' ? dark : light,
};

// Reducers

// Reducer for the theme
const themeReducer = (state = InitialState, action: actionProps) => {
    switch (action.type) {
        // Theme Change
        case actionTypes.CHANGE_MODE: {
            const myState = { ...state };
            myState.Mode = action.payload;
            myState.Theme = action.payload === 'dark' ? dark : light;
            return myState;
        }

        // Default
        default:
            return state;
    }
};

// Exports
export default themeReducer;
