import { useState } from "react"
import axios  from 'axios'
import { useNavigate } from 'react-router-dom'

function Register(props) {
    
    const Navigate = useNavigate()
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
            console.log("aca anda")
            console.log(user, email, cont)
            const response = await axios.post("http://localhost:3000/users/register", {
                name: user,
                email: email,
                password: cont
            })
            console.log("El coso se envia")
            if(!response){
                console.log("Error - No se pudo registrar correctamente")
                return
            }
            console.log(response.data)
            const token = await axios.post('http://localhost:3000/users/login', {
                email: response.data.email,
                password: cont
            })
            console.log("el token se crea")
            localStorage.setItem('token', token.data)
            location.reload()
        }catch(error){
            console.log("no anda :(")
            console.log({error})
            return
        }
    }

    if(props.user){
        Navigate('/')
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