import { useContext, useState } from "react"
import alertContext from "../../context/AlertContext"
import GithubContext from "../../context/GithubContext"
import { searchUsers } from "../../context/GithubActions"

const UserSearch = () => {
  const [text, setText] = useState("")

  const { users, dispatch } = useContext(GithubContext)
  const { setAlert } = useContext(alertContext)

  const handleChange = (e) => setText(e.target.value)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (text === "") {
      setAlert("Please enter a search query", "error")
    } else {
      dispatch({
        type: "SET_LOADING",
      })
      const data = await searchUsers(text)
      dispatch({
        type: "GET_USERS",
        payload: data,
      })
      setText("")
    }
  }

  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols2 md:grid-cols-2 mb-8 gap-8'>
      <div>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <div className='relative'>
              <input
                type='text'
                placeholder='Search'
                onChange={handleChange}
                value={text}
                className='w-full pr-40 bg-gray-200 input input-lg text-black'
              />
              <button
                type='submit'
                className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'>
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      <div>
        {users.length > 0 && (
          <button
            onClick={() =>
              dispatch({
                type: "CLEAR_USERS",
              })
            }
            className='btn btn-ghost btn-lg'>
            Clear
          </button>
        )}
      </div>
    </div>
  )
}
export default UserSearch
