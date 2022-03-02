import { createContext, useReducer } from "react"
import AlertReducer from "./AlertReducer"

const alertContext = createContext()

export const AlertProvider = ({ children }) => {
  const initialState = null

  const [state, dispatch] = useReducer(AlertReducer, initialState)

  const setAlert = (msg, type) => {
    dispatch({ type: "SET_MESSAGE", payload: { msg, type } })
    setTimeout(() => dispatch({ type: "CLEAR_MESSAGE" }), 2000)
  }

  return (
    <alertContext.Provider value={{ setAlert, state }}>
      {children}
    </alertContext.Provider>
  )
}

export default alertContext
