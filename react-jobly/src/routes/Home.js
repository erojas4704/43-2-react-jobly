import { useContext } from "react";
import AuthContext from "../UserContext";

const Home = () => {
    const { user } = useContext(AuthContext);

    return (
        <div>
            <h1>Welcome to Jobly{user && `, ${user.firstName} ${user.lastName}`}</h1>
            We'll help you land that dream job... whatever it is.
        </div>
    )
}

export default Home;