import _ from 'lodash'

const initialState = {
  userData: []
}

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'CREATE_STREAM': 
//       // const [ title, description ] = action.payload
//       console.log(action.payload, ' action.payload');
//       return{
//         ...state,
//         userData: [...state.userData, action.payload],
//       }
//     case 'FETCH_STREAMS': 
//       // const [ title, description ] = action.payload
//       return{
//         ...state,
//         userData: [...state.userData, ...action.payload]
//         // userData: [...state.userData, action.payload]
//       }
//     case 'FETCH_STREAM': 
//       // const [ title, description ] = action.payload
//       return{
//         ...state,
//         [action.payload.id]: action.payload
//       }
//     case 'DELETE_STREAM': 
//       // const [ title, description ] = action.payload
//       return{
//         ...state,
//         // userData: [...state.userData, action.payload]
//       }
//     case 'EDIT_STREAM': 
//       // const [ title, description ] = action.payload
  
//     default:
//       return state
//   }
// }

const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_STREAM': 
      return{
        ...state,
        [action.payload.id]: action.payload
      }
    case 'FETCH_STREAMS': 
      return{
        ...state,
        ..._.mapKeys(action.payload, 'id')
        // userData: [...state.userData, action.payload]
      }
    case 'FETCH_STREAM': 
      return{
        ...state,
        [action.payload.id]: action.payload
      }
    case 'DELETE_STREAM': 
      // const [ title, description ] = action.payload
      return _.omit(state, action.payload)
    
    case 'EDIT_STREAM': 
      return{
        ...state,
       [action.payload.id]: action.payload
      }
    default:
      return state
  }
}

export default reducer