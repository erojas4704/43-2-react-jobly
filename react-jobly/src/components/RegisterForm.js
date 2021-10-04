import { useState } from "react";

const RegisterForm = ({ onSubmit }) => {
    const [form, setForm] = useState({
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: ''
    });

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
            <label for="firstName">First Name</label>
            <input type="text" value={form.firstName} onChange={handleChange} name="firstName" id="firstName" />
            <label for="lastName">Last Name</label>
            <input type="text" value={form.lastName} onChange={handleChange} name="lastName" id="lastName" />
            <label for="email">E-mail</label>
            <input type="text" value={form.email} onChange={handleChange} name="email" id="email" />
            <label for="password">Password</label>
            <input type="password" value={form.password} onChange={handleChange} name="password" id="password" />
            <input type="submit" value="Register" />
        </form>
    )
}

export default RegisterForm;