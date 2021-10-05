import { useContext } from "react";
import { Redirect, Route } from "react-router";
import AuthContext from "../UserContext";

const PrivateRoute = ({ exact, path, children }) => {
    const { user } = useContext(AuthContext);
    
    if (!user) return <Redirect to="/login" />

    return (
        <Route exact={exact} path={path}>
            {children}
        </Route>
    )
}

export default PrivateRoute;