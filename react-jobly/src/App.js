import "./App.css";
import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./routes/Home";
import Companies from "./routes/Companies";
import Jobs from "./routes/Jobs";
import Login from "./routes/Login";
import SignUp from "./routes/Signup";
import Profile from "./routes/Profile";
import JoblyAPI from "./JoblyAPI";
import jwt from "jsonwebtoken";
import AuthContext from "./UserContext";
import PrivateRoute from "./components/PrivateRoute";
import useLocalStorage from "./hooks/useLocalStorage";

const App = () => {
  const [token, setToken] = useLocalStorage("user-token", null);
  const [user, setUser] = useState(null);

  const signup = async form => {
    const token = await JoblyAPI.register(form.username, form.password, form.firstName, form.lastName, form.email);
    setToken(token);
  }

  const login = async form => {
    const token = await JoblyAPI.login(form.username, form.password);
    setToken(token);
  }

  const logout = () => {
    setToken(null);
    setUser(null);
  }

  useEffect(() => {
    JoblyAPI.token = token;
    const fetchUserData = async () => {
      if (token) {
        try {
          const { username } = await jwt.decode(token);
          const userData = await JoblyAPI.getUserInfo(username);
          setUser(userData);
        } catch (err) {
          console.error(`Invalid login. ${err}`);
          logout();
        }
      }
    }
    fetchUserData();
  }, [token]);

  return (
    <div className="App">
      <AuthContext.Provider value={{ user, setUser }} >
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" >
              <Home />
            </Route>
            <PrivateRoute exact path="/companies">
              <Companies />
            </PrivateRoute>
            <PrivateRoute exact path="/jobs">
              <Jobs />
            </PrivateRoute>
            <Route exact path="/login">
              <Login login={login} />
            </Route>
            <Route exact path="/signup">
              <SignUp signup={signup} />
            </Route>
            <PrivateRoute exact path="/profile">
              <Profile updateUser={(res) => setUser(res)}/>
            </PrivateRoute>
            <PrivateRoute exact path="/logout" >
              {() => {
                logout();
                return <Redirect to="/" />
              }}
            </PrivateRoute>
          </Switch>
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
