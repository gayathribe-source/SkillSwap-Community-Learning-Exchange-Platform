import React, { useState } from 'react'
import axios from 'axios'

import { Link, useNavigate } from 'react-router-dom'

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const checkUser = await axios.get(
        `http://localhost:3001/users?email=${form.email}`
      );

      if (checkUser.data.length > 0) {
        alert("Email already exists");
        return;
      }

      await axios.post(
        "http://localhost:3001/users",
        form
      );

      alert("Signup Successful");
      navigate("/");

    } catch (error) {
      console.log(error);
      alert("Signup Failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSignup}
        className="bg-white p-6 rounded-xl shadow-lg w-80"
      >
        <h1 className="text-2xl font-bold mb-4 text-center">
          Signup
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-2 mb-3 rounded"
        />

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

        <button className="bg-blue-500 text-white w-full py-2 rounded">
          Signup
        </button>

        <p className="mt-3 text-center">
          Already have account?
          <Link to="/" className="text-blue-500 ml-1">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;