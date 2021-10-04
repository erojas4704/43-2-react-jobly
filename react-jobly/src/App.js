import "./App.css";
import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./routes/Home";
import Companies from "./routes/Companies";
import Jobs from "./routes/Jobs";
import Login from "./routes/Login";
import SignUp from "./routes/Signup";
import Profile from "./routes/Profile";
import JoblyAPI from "./JoblyAPI";
import jwt from "jsonwebtoken";

const App = () => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const signup = async form => {
    const token = await JoblyAPI.register(form.username, form.password, form.firstName, form.lastName, form.email);
    setToken(token);
  }

  const login = async form => {
    const token = await JoblyAPI.login(form.username, form.password);
    setToken(token);
  }

  useEffect(async () => {
    if (token) {
      const { username } = await jwt.decode(token);
      const userData = await JoblyAPI.getUserInfo(username);
      setUser(userData.username);
    }

  }, [token]);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/companies" component={Companies} />
          <Route exact path="/jobs" component={Jobs} />
          <Route exact path="/login">
            <Login login={login} />
          </Route>
          <Route exact path="/signup">
            <SignUp signup={signup} />
          </Route>
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
