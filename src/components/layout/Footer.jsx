import { FaSignature } from "react-icons/fa"

const Footer = () => {
  const footerYear = new Date().getFullYear()
  return (
    <footer className='footer p-10 bg-secondary text-white footer-center'>
      <div>
        <FaSignature className='text-3xl' />
        <p>© {footerYear} Warren Harper</p>
      </div>
    </footer>
  )
}
export default Footer
