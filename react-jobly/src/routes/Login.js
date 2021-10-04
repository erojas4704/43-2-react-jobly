import LoginForm from "../components/LoginForm";

const Login = ({ login }) => {

    const handleSubmit = form => {
        login(form);
    }

    return (
        <div>
            <h1>Log In</h1>
            <LoginForm onSubmit={handleSubmit} />
        </div>
    )
}

export default Login;