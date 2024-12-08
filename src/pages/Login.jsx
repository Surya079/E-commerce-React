import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios"; // Make sure Axios is imported

export const Login = () => {
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });

  const [error, setErrors] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata((prevdata) => ({
      ...prevdata,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/login", // Ensure this is the correct API endpoint
        formdata
      );
      console.log(formdata);
      

      if (response.status === 200) {
        // Check if the response is successful
        console.log(formdata);
        // Assuming you get a token or some identifier upon login
        localStorage.setItem("authToken", response.data.token); // Save the token
        navigate("/"); // Redirect to home page
      } else {
        setErrors("Invalid credentials");
      }
    } catch (error) {
      console.error(error);
      setErrors("Error logging in. Please try again.");
    }
  };

  return (
    <section className="p-2 mt-[56px] m-5 mx-auto flex flex-col items-center">
      <div className="md:w-[600px] xs:max-w-[555px] h-[400px] bg-white mx-auto px-14 py-10 rounded-md">
        <h3 className="text-3xl font-bold text-center">Sign in</h3>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4 mt-7">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formdata.email}
              onChange={handleChange}
              className="h-14 w-full bg-slate-900/5 p-5 outline-none rounded-xl"
              required
            />
            <input
              type="password" // Change this to password for security
              placeholder="Password"
              name="password"
              value={formdata.password}
              onChange={handleChange}
              className="h-14 w-full bg-slate-900/5 p-5 outline-none rounded-xl"
              required
            />
          </div>
          <button
            type="submit"
            className="px-5 py-3 text-center text-white bg-black w-full my-5 rounded-md"
          >
            Sign in
          </button>
          {error && <p className="text-red-500">{error}</p>}
          {/* Display error message */}
          <div className="text-black font-bold">
            <p className="">
              New user?
              <span className="text-yellow-400 underline cursor-pointer">
                <NavLink to="/register">Register</NavLink>
              </span>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};
