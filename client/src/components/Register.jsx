import { useState } from "react"
import axios  from 'axios'

function Register() {
    
    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [cont, setCont] = useState('')
    const [vcont, setVcont] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async(e) => {
        e.preventDefault()
        if(vcont != cont){
            console.log("Las contraseñas no coinciden")
            return
        }

        try{
            const response = await axios.post('localhost:3000/user', {
                user,
                email,
                cont
            })
            const token = await axios.post('localhost:3000/user')


        }catch(error){
            return
        }
    }

    return (<>
            <h1>Este es el Register</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" required onChange={(event) => setUser(event.target.value)} placeholder="Username"/>
                <input type="email" required onChange={(event) => setEmail(event.target.value)} placeholder="Email"/>
                <input type="password" required onChange={(event) => setCont(event.target.value)} placeholder="Contraseña"/>
                <input type="password" required onChange={(event) => setVcont(event.target.value)} placeholder="Repetir contraseña"/>
                <button type="submit" required style={{backgroundColor: "black"}}>Enviar</button>
            </form>
        </>)
}

export default Register