import React, { useState } from 'react'
import axios from 'axios'

import { useNavigate, Link } from 'react-router-dom'

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `http://localhost:3001/users?email=${form.email}&password=${form.password}`
      );

      if (response.data.length > 0) {

       const user = response.data[0];
       navigate("/home")

      } else {
        alert("Invalid Email or Password");
      }

    } catch (error) {
      console.log(error);
      alert("Login Failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded-xl shadow-lg w-80"
      >
        <h1 className="text-2xl font-bold mb-4 text-center">
          Login
        </h1>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border p-2 mb-3 rounded"
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={form.password}
          onChange={handleChange}
          className="w-full border p-2 mb-3 rounded"
        />

        <button className="bg-green-500 text-white w-full py-2 rounded">
          Login
        </button>

        <p className="mt-3 text-center">
          Don't have account?
          <Link to="/signup" className="text-blue-500 ml-1">
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;