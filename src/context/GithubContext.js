import { createContext, useReducer } from "react"
import GithubReducer from "./GithubReducer"

const GithubContext = createContext()

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
    user: {},
    repos: [],
  }

  const [state, dispatch] = useReducer(GithubReducer, initialState)

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}>
      {children}
    </GithubContext.Provider>
  )
}

export default GithubContext
