import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import AdminLogin from './pages/AdminLogin'
import Search from './pages/Search'
import Apply from './pages/Apply'
import AdminCentres from './pages/AdminCentres'
import AdminSearch from './pages/AdminSearch'

function App() {
  return (
    <div className='App'>
      <Router>
          <Header />
          <Routes>
            {/* <Route path='*' element={<Home/>} />
            <Route path='/login' element={<Login />} />
            <Route path='/signUp' element={<SignUp />} />
            <Route path='/search' element={<Search />} /> */}
            <Route path='/apply' element={<Apply />} />
            {/* <Route path='/adminlogin' element={<AdminLogin />} />
            <Route path='/centres' element={<AdminCentres />} />
            <Route path='/adminsearch' element={<AdminSearch />} />    */}
          </Routes>
          <Footer />
      </Router>
      <ToastContainer />
    </div>
  )
}

export default App