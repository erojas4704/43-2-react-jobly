import { useState } from "react";

const LoginForm = ({ onSubmit }) => {
    const [form, setForm] = useState({ username: '', password: '' });

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(form);
    }

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label for="username">Username</label>
            <input type="text" value={form.username} onChange={handleChange} name="username" id="username" />
            <label for="password">Password</label>
            <input type="password" value={form.password} onChange={handleChange} name="password" id="password" />
            <input type="submit" value="Login" />
        </form>
    )
}

export default LoginForm;