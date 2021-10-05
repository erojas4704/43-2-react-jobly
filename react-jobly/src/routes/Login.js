import { useContext } from "react";
import { Redirect } from "react-router";
import LoginForm from "../components/LoginForm";
import AuthContext from "../UserContext";

const Login = ({ login }) => {
    const { user } = useContext(AuthContext);

    const handleSubmit = form => {
        login(form);
    }

    if (user) {
        return <Redirect to="/" />
    }

    return (
        <div>
            <h1>Log In</h1>
            <LoginForm onSubmit={handleSubmit} />
        </div>
    )
}

export default Login;