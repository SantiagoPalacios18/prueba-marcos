import { useEffect } from "react"
import { useState } from "react"
import axios  from 'axios'
function Login() {

    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [enviar, setEviar] = useState(true)

    const changeEmail = (event) => {
        setEmail(event.target.value)
        console.log(email);

    }
    const changePassword = (event) => {
        setPassword(event.target.value)
        console.log(password);

    }

    const fetchLogin = async () => {
        const token = await axios.post('http://localhost:3000/users/login', {
            email: email,
            password: password
        })
        console.log(token);
        localStorage.setItem('token', token.data)
    }

    useEffect(() => {
        fetchLogin()
    }, [enviar])


    return (<>
        <h1>Este es el Login</h1>
        <input type="text" onChange={changeEmail} />
        <input type="text" onChange={changePassword} />
        <button onClick={() => setEviar(!enviar)}>Enviar</button>
    </>)
}

export default Login