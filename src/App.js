import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminView from "./Components/Views/Admin";
import ModView from "./Components/Views/Mods";
import UserView from "./Components/Views/Users";
import Welcome from './Components/Welcome/Welcome'
import NavSection from './Components/Navigation/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [loggingIn, setLoggingIn] = useState(true)



  console.log('Hello World!')

  return (
    <div className="App">
      <Router>
        <NavSection/>
        <Switch>
          <Route exact path="/mod/1447">  {/* Mods login */}
            <ModView/>
          </Route>
          <Route exact path="/admin/1275">  {/* Admin login */}
            <AdminView/>
          </Route>
          <Route exact path="/auth">  {/* User login */}
             <UserView loggingIn={loggingIn} setLoggingIn={setLoggingIn}/>
          </Route>
          <Route exact path="/">  
            <Welcome loggingIn={loggingIn} setLoggingIn={setLoggingIn}/>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
