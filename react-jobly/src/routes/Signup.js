import { useContext } from "react";
import { Redirect } from "react-router";
import RegisterForm from "../components/RegisterForm";
import AuthContext from "../UserContext";


const SignUp = ({ signup }) => {
    const { user } = useContext(AuthContext);

    const submitHandler = form => {
        signup(form);
    }

    if (user) {
        return <Redirect to="/" />
    }

    return (
        <div>
            <h1>Sign Up</h1>
            <RegisterForm onSubmit={submitHandler} />
        </div>
    )
}

export default SignUp;