import { Link } from "react-router-dom";
import "./nav.css";

const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo">Home</Link>
                <Link to="/companies">Companies</Link>
                <Link to="/jobs">Jobs</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">SignUp</Link>
                <Link to="/profile">Profile</Link>
            </div>
        </nav>
    )
}

export default Navbar;