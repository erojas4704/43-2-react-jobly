import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Home from './routes/Home';
import Companies from './routes/Companies';
import Jobs from './routes/Jobs';
import Login from './routes/Login';
import SignUp from './routes/Signup';
import Profile from './routes/Profile';
import Navbar from "./Navbar";

const Routes = () => {
    return (
        <div>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/companies" component={Companies} />
                    <Route exact path="/jobs" component={Jobs} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/profile" component={Profile} />
                </Switch>
            </Router>
        </div>
    );
}

export default Routes;