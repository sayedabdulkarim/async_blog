const initialState = {
  isSignedIn: null,
  name: 'AUTH',
  userId: null,
  userData: []
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
    case 'CREATE_STREAM': 
      // const [ title, description ] = action.payload
      return{
        ...state,
        userData: [...state.userData, action.payload]
      }
    default: return state
  }

  // return state
}

export default reducer