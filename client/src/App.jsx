import { Route, Routes, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Home from "./components/Home"
import Login from "./components/Login"
import Register from "./components/Register"
import axios from 'axios'

function App() {
  const [user, setUser] = useState("")

    const fetchMe = async () => {
      
        const token = localStorage.getItem('token')        
        const response = await axios.get('http://localhost:3000/users/me', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        if(!response){
          setUser(null)
          console.log(user)
          localStorage.setItem('token', null)
        }
        console.log(response.data);
        setUser(response.data)
    }

    useEffect(() => {
      if(!user){
        fetchMe()
      }
    }) 

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
        <Route element={<Login user={user} />} path='/login' />
        <Route element={<Register user={user} />} path='/register' />
        <Route element={<Home user={user} />} path='/' />
      </Routes>
    </>
  )
}

export default App
