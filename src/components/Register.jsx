import { useState } from "react";
import axios from "axios";

export default function Register() {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // const url = "http://localhost:8080/api/users/register";
            const url = "https://cafe-backend-wheat.vercel.app//api/users/register";
            const result = await axios.post(url, user);
            setError("Data saved successfully");
        } catch (err) {
            console.log(err);
            setError("Something went wrong");
        }
    };

    return (
        <div>
            <h2>Registration Form</h2>
            <p >{error}</p>
            <form onSubmit={handleSubmit}>
                <p>
                    <input
                        type="text"
                        placeholder="FirstName"
                        onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                    />
                </p>
                <p>
                    <input
                        type="text"
                        placeholder="LastName"
                        onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                    />
                </p>
                <p>
                    <input
                        type="text"
                        placeholder="Email Address"
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                    />
                </p>
                <p>
                    <input
                        type="password"
                        placeholder="New Password"
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                    />
                </p>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
