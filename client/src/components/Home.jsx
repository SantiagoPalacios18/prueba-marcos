import { useEffect } from "react"
import { useState } from "react"
import axios from 'axios'
function Home() {

    const [user, setUser] = useState({})

    const fetchMe = async () => {
        const token = localStorage.getItem('token')        
        const response = await axios.get('http://localhost:3000/users/me', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        console.log(response.data);
        setUser(response.data)
    }

    useEffect(() => {
        fetchMe()
    }, [])


    return (<>
        <h1>Este es el Home</h1>
        <h2>{user.name}</h2>
        <h2>{user.email}</h2>
    </>)
}

export default Home