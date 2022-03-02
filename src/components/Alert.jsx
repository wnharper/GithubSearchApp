import { useContext } from "react"
import alertContext from "../context/AlertContext"
import { FaExclamationCircle } from "react-icons/fa"
const Alert = () => {
  const { state } = useContext(alertContext)
  return (
    state && (
      <div className='flex items-start mb-4 space-x-2'>
        {state.type === "error" && <FaExclamationCircle className='mt-1' />}
        <p className='flex-1 text-base font-semibold leading-7'>
          <strong>{state.msg}</strong>
        </p>
      </div>
    )
  )
}
export default Alert
