import React, { useState } from "react";
import { TextField, Button } from '@mui/material';
import { useDispatch } from "react-redux";
import { updateUser, updateToken } from "../../redux/actions";
import validate from "../../assets/validate";
import '../../assets/authentication.css'
// import { useSelector } from "react-redux";

const UserRegister = () => {
  const [email, setEmail] = useState(undefined);
  const [username, setUsername] = useState(undefined);
  const [firstName, setFirstName] = useState(undefined);
  const [lastName, setLastName] = useState(undefined);
  const [genderIden, setGenderIden] = useState(undefined);
  const [pronouns, setPronouns] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  let emailValidate = validate.email(email !== undefined ? email : '')
  let passwordValidate = validate.password(password !== undefined ? password : '')
  let pronounsValidate = validate.pronouns(pronouns !== undefined ? pronouns : '')


  let dispatch = useDispatch();
  let body = document.querySelector("body");
  body.style.background =
    "url('https://images.pexels.com/photos/1831234/pexels-photo-1831234.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')";
  body.style.maxHeight = '1000vh'




  const register = async (e) => {
    e.preventDefault();

    dispatch(
      updateUser({
        email,
        username,
        firstName,
        lastName,
        genderIden,
        pronouns,
        password,
      })
    );
    let response = await fetch(`http://localhost:8080/3658/register`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({
        email,
        username,
        firstName,
        lastName,
        genderIden,
        pronouns,
        password,
      }),
    });
    let json = await response.json();
    console.log(json);
    if(json.message === 'email or username already in use') {
      alert('A user account already exists with these credientials')
    }
    dispatch(updateToken(json.token));


  };

  return (
    <div className="register">
      <h1>Welcome to T4T</h1>
      <p>Sign up to get started</p>

      <form noValidate autoComplete="off" onSubmit={(e) => register(e)}>
        <TextField
          className="textfield"
          id="email"
          error={emailValidate ? false : true}
          label={emailValidate ? "Email" : "Please provide a valid email"}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br/>
        <TextField
         className="textfield"
          id="username"
          label="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br/>
        <TextField
         className="textfield"
          id="firstName"
          label="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br/>
        <TextField
         className="textfield"
          id="lastName"
          label="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
        <br/>
        <TextField
         className="textfield"
          id="genderIden"
          label="Gender Identity"
          onChange={(e) => setGenderIden(e.target.value)}
        />
        <br/>
        <TextField
         className="textfield"
          id="pronouns"
          error={pronounsValidate ? false : true}
          label={pronounsValidate ? "Pronouns" : "Please make sure your pronouns are formatted as so:  'they/them'"}
          onChange={(e) => setPronouns(e.target.value)}
        />
        <br/>
        <TextField
         className="textfield"
          id="password"
          error={passwordValidate ? false : true}
          label={passwordValidate ? "Password" : "Please make sure your password has 1 letter, 1 number, and is 10 characters long"}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default UserRegister;
