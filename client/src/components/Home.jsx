import { useEffect } from "react"
import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
function Home(props) {

    const Navigate = useNavigate()
    console.log(props.user)

    const logout = () => {
        localStorage.setItem('token', null)
        location.reload()
    }

    return (<>
        <h1>Este es el Home</h1>
        <h2>{props.user.name}</h2>
        <h2>{props.user.email}</h2>

        {props.user && <button onClick={logout}>Logout</button>} 
    </>)
}

export default Home