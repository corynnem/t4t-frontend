import React, { useState } from "react";
import { TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { updateToken, userLogin } from "../../redux/actions";
import { useSelector } from "react-redux";
import '../../assets/authentication.css'


const UserLogin = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    let body = document.querySelector("body");
    body.style.background =
      "url('https://images.pexels.com/photos/1831234/pexels-photo-1831234.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')";
    body.style.maxHeight = '1000vh'
  

    let dispatch = useDispatch()

    const login = async(e) => {
        e.preventDefault()
        dispatch(userLogin({username,
                             password}))
        let response = await fetch(`http://localhost:8080/3658/login`, {
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
            <h1>Login</h1>
            <form noValidate autoComplete="off" onSubmit={(e) => login(e)}>
                <TextField id="username" label="Username" className="textfield" onChange={(e) => setUsername(e.target.value)}/>
                <br/>
                <TextField id="password" label="Password" className="textfield" onChange={(e) => setPassword(e.target.value)}/>
                <Button type="submit">Submit</Button>
            </form>
        </div>
    )


}


export default UserLogin;


