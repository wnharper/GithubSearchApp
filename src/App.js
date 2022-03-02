import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { GithubProvider } from "./context/GithubContext"
import { AlertProvider } from "./context/AlertContext"

// components
import Footer from "./components/layout/Footer"
import Navbar from "./components/layout/Navbar"
import Alert from "./components/Alert"

// pages
import Home from "./pages/Home"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import User from "./pages/User"

function App({ theme }) {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div
            data-theme={theme}
            className='flex flex-col justify-between h-screen'>
            <Navbar />

            <main className='container mx-auto px-5 pb-10'>
              <Alert className='absolute top-0 left-0' />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/notfound' element={<NotFound />} />
                <Route path='/user/:username' element={<User />} />
                <Route path='/*' element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  )
}
export default App
