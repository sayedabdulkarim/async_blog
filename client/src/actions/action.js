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

//create
const createStream = (formValues) => {
  return (dispatch, getState) => {
    const { userId } = getState().authReducer;
    axios.post('http://localhost:3001/streams', {...formValues, userId })
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


//fetch_All

const fetchStreams = () => {
  return dispatch => {
    axios.get('http://localhost:3001/streams')
      .then(res => res)
      .then(res => {
        dispatch({
          type: 'FETCH_STREAMS',
          payload: res.data
        })
      })
  }
}

//

//fetch_single

const fetchStream = (id) => {
  return dispatch => {
    axios.get(`http://localhost:3001/streams/${id}`)
      .then(res => res)
      .then(res => {
        dispatch({
          type: 'FETCH_STREAM',
          payload: res.data
        })
      })
  }
}


//edit

const editStream = (id, formValues) => {
  return dispatch => {
    axios.put(`http://localhost:3001/streams/${id}`, formValues)
      .then(res => res)
      .then(res => {
        dispatch({
          type: 'EDIT_STREAM',
          payload: res.data
        })
      })
  }
}

//


//

//delete

const deleteStream = (id) => {
  return dispatch => {
    axios.delete(`http://localhost:3001/streams/${id}`)
      .then(res => res)
      .then(res => {
        dispatch({
          type: 'DELETE_STREAM',
          payload: id
        })
      })
  }
}

//

export {
  signIn,
  signOut,
  createStream,
  fetchStreams,
  fetchStream,
  deleteStream,
  editStream
}