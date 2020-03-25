import axios from 'axios'

import streams from '../apis/stream'

const signIn = (payload) => {
  return{
    type: 'SIGN_IN',
    payload
  }
}

const signOut = () => {
  return{
    type: 'SIGN_OUT'
  }
}

const createStream = (formValues) => {
  return dispatch => {
    axios.post('http://localhost:3001/streams', formValues)
      .then(res => res)
      .then(res => {
        dispatch({
          type: 'CREATE_STREAM',
          payload: res.data
        })
      })
  }
}

// const createStream = (formValues) => async dispatch => {
//     // axios.post('http://localhost:3001/streams', formValues)
//     streams.post('/streams', formValues)
// }

export {
  signIn,
  signOut,
  createStream
}