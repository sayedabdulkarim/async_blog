import { combineReducers } from 'redux'

//form
import { reducer as formReducer } from 'redux-form'

import authReducer from './authReducer'
import streamReducer from './streamReducer'

export default combineReducers({
  authReducer,
  streamReducer,
  form: formReducer
})