import { combineReducers } from 'redux'

//form
import { reducer as formReducer } from 'redux-form'

import authReducer from './authReducer'

export default combineReducers({
  authReducer,
  form: formReducer
})