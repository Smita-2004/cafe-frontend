// import "./Register.css";
// // import { useRef } from "react";
// import { useState } from "react";
// import { Link,useNavigate } from "react-router-dom";
// import axios from "axios";
// export default function Register() {
//   const [user, setUser] = useState({});
//   const [error, setError] = useState();
//   const Navigate = useNavigate()
//   const API_URL = import.meta.env.VITE_API_URL
//   const handleSubmit = async () => {
//     try {
//       const url = `${API_URL}/api/users/register`;
//       const result = await axios.post(url, user);
//       setError("Data saved successfully");
//       Navigate("/login")
//     } catch (err) {
//       console.log(err);
//       setError("Something went wrong");
//     }
//   };
//   return (
//     <div className="App-Register-Row">
//       <div style={{ backgroundColor: "white" }}>
//         <h2>Registration Form</h2>
//         {error}
//         <p>
//           <input
//             type="text"
//             onChange={(e) => setUser({ ...user, firstName: e.target.value })}
//             placeholder="Enter First Name"
//           />
//         </p>
//         <p>
//           <input
//             type="text"
//             placeholder="Enter Last Name"
//             onChange={(e) => setUser({ ...user, lastName: e.target.value })}
//           />
//         </p>
//         <p>
//           <input
//             type="text"
//             placeholder="Enter Email Address"
//             onChange={(e) => setUser({ ...user, email: e.target.value })}
//           />
//         </p>
//         <p>
//           <input
//             type="password"
//             placeholder="Enter Password"
//             onChange={(e) => setUser({ ...user, password: e.target.value })}
//           />
//         </p>
//         <p>
//           <button onClick={handleSubmit}>Submit</button>
//         </p>
//         <hr />
//       <Link to="/login">Already a member? Login Here...</Link>
//       </div>
//     </div>
//   );
// }

// // export default function Register() {
// //   const firstName = useRef();
// //   const lastName = useRef();
// //   const email = useRef();
// //   const password = useRef();
// //   const handleSubmit = () => {
// //     const user = {
// //       firstName: firstName.current.value,
// //       lastName: lastName.current.value,
// //       email: email.current.value,
// //       password: password.current.value,
// //     };
// //     console.log(user);
// //   };
// //   return (
// //     <div className="App-Register-Row">
// //       <div style={{ backgroundColor: "white" }}>
// //         <h2>Registration Form</h2>
// //         <p>
// //           <input type="text" placeholder="Enter First Name" ref={firstName} />
// //         </p>
// //         <p>
// //           <input type="text" placeholder="Enter Last Name" ref={lastName} />
// //         </p>
// //         <p>
// //           <input type="text" placeholder="Enter Email Address" ref={email} />
// //         </p>
// //         <p>
// //           <input type="password" placeholder="Enter Password" ref={password} />
// //         </p>
// //         <p>
// //           <button onClick={handleSubmit}>Submit</button>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // }








import "./Register.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents page reload

    // Basic validation
    if (!user.firstName || !user.email || !user.password) {
      setError("Please fill all required fields");
      return;
    }

    try {
      const url = `${API_URL}/api/users/register`;
      const result = await axios.post(url, user);

      if (result.data.success || result.status === 200) {
        setError("✅ Registered successfully");
        navigate("/login");
      } else {
        setError("⚠️ Registration failed. Try again.");
      }
    } catch (err) {
      console.error(err);
      setError("❌ Something went wrong");
    }
  };

  return (
    <div className="App-Register-Row">
      <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "10px" }}>
        <h2>Registration Form</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <p>
            <input
              type="text"
              placeholder="Enter First Name"
              value={user.firstName}
              onChange={(e) => setUser({ ...user, firstName: e.target.value })}
            />
          </p>
          <p>
            <input
              type="text"
              placeholder="Enter Last Name"
              value={user.lastName}
              onChange={(e) => setUser({ ...user, lastName: e.target.value })}
            />
          </p>
          <p>
            <input
              type="email"
              placeholder="Enter Email Address"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </p>
          <p>
            <input
              type="password"
              placeholder="Enter Password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </p>
          <p>
            <button type="submit">Submit</button>
          </p>
        </form>
        <hr />
        <Link to="/login">Already a member? Login here...</Link>
      </div>
    </div>
  );
}
