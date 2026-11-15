import { useState } from "react";
import Navbar from "../components/Navbar";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password
        })
      });

      const data = await response.json();

      setMessage(data.message);

      if (response.ok) {
        setName("");
        setEmail("");
        setPassword("");
      }

    } catch (error) {
      console.log(error);
      setMessage("Unable to connect to server");
    }
  };

  return (
    <>
      <Navbar />

      <div className="form-page">
        <div className="form-box">

          <h1>Create Account</h1>

          <p className="form-subtitle">
            Register to start exploring our books
          </p>

          <form onSubmit={handleSubmit}>

            <label>Full Name</label>

            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Password</label>

            <input
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit">
              Register
            </button>

          </form>

          {message && (
            <p className="form-message">
              {message}
            </p>
          )}

          <p className="form-footer">
            Already have an account?
            <a href="/login"> Login</a>
          </p>

        </div>
      </div>
    </>
  );
}

export default Register;