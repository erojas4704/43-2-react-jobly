import RegisterForm from "../components/RegisterForm";
import JoblyAPI from "../JoblyAPI";


const SignUp = ({ signup }) => {
    const submitHandler = form => {
        signup(form);
    }

    return (
        <div>
            <h1>Sign Up</h1>
            <RegisterForm onSubmit={submitHandler} />
        </div>
    )
}

export default SignUp;