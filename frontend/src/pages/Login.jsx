import { useState } from "react";
import Navbar from "../components/Navbar";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {

    event.preventDefault();

    try {

      const response = await fetch(
        "http://localhost:5000/login",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            email,
            password
          })
        }
      );

      const data = await response.json();

      setMessage(data.message);

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

          <h1>Welcome Back</h1>

          <p className="form-subtitle">
            Login to your BookStore account
          </p>

          <form onSubmit={handleSubmit}>

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
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit">
              Login
            </button>

          </form>

          {message && (
            <p className="form-message">
              {message}
            </p>
          )}

          <p className="form-footer">
            Don't have an account?
            <a href="/register"> Register</a>
          </p>

        </div>

      </div>
    </>
  );
}

export default Login;