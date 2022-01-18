import React, { useState } from "react";
import '../../assets/authentication.css'
import { TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { updateUser, updateToken } from "../../redux/actions";





const AdminLogin = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    let dispatch = useDispatch()

    const login = async(e) => {
        e.preventDefault()
        dispatch(updateUser({username,
                             password}))
        let response = await fetch(`http://localhost:8080/3097/login`, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify({
                username,
                password
            })
        })
        let json = await response.json()
        console.log(json)
        dispatch(updateToken(json.token))
    }

    

    return (
        <div className="login">
            <h1>Welcome Administrator</h1>
            <form noValidate autoComplete="off" onSubmit={(e) => login(e)}>
                <TextField id="username" label="Username" className="textfield" onChange={(e) => setUsername(e.target.value)}/>
                <br/>
                <TextField id="password" label="Password" className="textfield" onChange={(e) => setPassword(e.target.value)}/>
                <Button type="submit">Submit</Button>
            </form>
        </div>
    )
}

export default AdminLogin;