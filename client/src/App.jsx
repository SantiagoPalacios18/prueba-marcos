import { Route, Routes, Link } from 'react-router-dom'

import Home from "./components/Home"
import Login from "./components/Login"
import Register from "./components/Register"


function App() {

  return (
    <>

      <h1>App.jsx</h1>
      <div>
        <Link to="/login" >Login</Link>
        <p></p>
        <Link to="/" >Home</Link>
        <p></p>
        <Link to="/register" >Register</Link>
      </div>
      <Routes>
        <Route element={<Login />} path='/login' />
        <Route element={<Register />} path='/register' />
        <Route element={<Home />} path='/' />
      </Routes>
    </>
  )
}

export default App
