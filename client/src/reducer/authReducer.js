const initialState = {
  isSignedIn: null,
  name: 'AUTH',
  userId: null
}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'SIGN_IN': 
      return{
        ...state,
        isSignedIn: true,
        userId: action.payload
      }
    case 'SIGN_OUT': 
      return{
        ...state,
        isSignedIn: false,
        userId: null
      }
    default: return state
  }

  // return state
}

export default reducer