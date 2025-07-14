import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [user, setUser] = useState({});
  const [message, setMessage] = useState("");
  const API = import.meta.env.VITE_API_URL;

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const url = `${API}/api/users/login`;
      const res = await axios.post(url, user);

      if (res.data && res.data.token) {
        setMessage("Welcome 🎉");
      } else {
        setMessage("Access Denied ");
      }
    } catch (err) {
      console.error(err);
      setMessage("Access Denied ");
    }
  };

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <br />
        <button type="submit">Login</button>
      </form>
      <p>{message}</p>
    </div>
  );
}
