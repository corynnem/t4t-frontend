import React, { useEffect, useState } from "react";
import UserRegister from "../Authentication/Users/Register";
import UserLogin from "../Authentication/Users/Login";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import Home from "./MainApp/Home";

const UserView = ({ loggingIn, setLoggingIn }) => {
  const [token, setToken] = useState(undefined);
  let state = useSelector((state) => state);

  useEffect(() => {
    // state.token !== undefined ? setToken(state.token) : setToken(undefined);
    if(state.token !== undefined){ 
      setToken(state.token)
    } else {
      setToken(undefined)
    }
  });

  return (
    <div>
      {token !== undefined ? (
        <Home state={state} />
      ) : loggingIn ? (
        <div>
          <UserLogin />{" "}
          <Button
            color="inherit"
            variant="outlined"
            style={{ marginTop: "1%" }}
            onClick={() => setLoggingIn(!loggingIn)}
          >
            Signup
          </Button>
        </div>
      ) : (
        <div>
          <UserRegister />{" "}
          <Button
            color="inherit"
            variant="outlined"
            style={{ marginTop: "1%" }}
            onClick={() => setLoggingIn(!loggingIn)}
          >
            {" "}
            Login
          </Button>
        </div>
      )}
    </div>
  );
};

export default UserView;
