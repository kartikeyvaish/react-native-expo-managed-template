// Imports
import { combineReducers } from '@reduxjs/toolkit'

// Importing all the reducers
import authReducer from './auth/reducer'
import themeReducer from './theme/reducer'


// Combining all the reducers and exporting
export default combineReducers({
    Auth: authReducer,
    Theme: themeReducer
})