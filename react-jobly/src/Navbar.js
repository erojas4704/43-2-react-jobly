import { useContext } from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import AuthContext from "./UserContext";

const Navbar = () => {
    const { user } = useContext(AuthContext);

    return (
        <nav>
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo">Home</Link>
                {user && <Link to="/companies">Companies</Link>}
                {user && <Link to="/jobs">Jobs</Link>}
                {!user && <Link to="/login">Login</Link>}
                {!user && <Link to="/signup">SignUp</Link>}
                {user && <Link to="/profile">{user.username}</Link>}
                {user && <Link to="/logout">Logout</Link>}
            </div>
        </nav>
    )
}

export default Navbar;