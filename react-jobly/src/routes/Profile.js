import { useContext, useState } from "react";
import JoblyAPI from "../JoblyAPI";
import AuthContext from "../UserContext";

const Profile = ({updateUser}) => {
    const { user } = useContext(AuthContext);
    const [form, setForm] = useState({ 
        firstName: user.firstName, 
        lastName: user.lastName,
        password: '',
        email: ''
    });

    const handleSubmit = async e => {
        e.preventDefault();
        //Update profile here i dont wanna complicate things
        const res = await JoblyAPI.patchUser(user, form);
        console.log(res);
        updateUser(res);
    }

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    //find a way to disable browser's autocorrect?

    return (
        <div>
            <h1>Edit Profile</h1>
            <form onSubmit={handleSubmit} autoComplete="off">
                <label htmlFor="firstName">First Name:</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    onChange={handleChange}
                    value={form.firstName}
                />
                <label htmlFor="lastName">Last Name:</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    onChange={handleChange}
                    value={form.lastName}
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={handleChange}
                    value={form.password}
                />
                <label htmlFor="email">E-mail:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    value={form.email}
                />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Profile;