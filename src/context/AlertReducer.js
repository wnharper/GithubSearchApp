const AlertReducer = (state, action) => {
  switch (action.type) {
    case "SET_MESSAGE":
      return action.payload
    case "CLEAR_MESSAGE":
      return null
    default:
      return state
  }
}

export default AlertReducer
