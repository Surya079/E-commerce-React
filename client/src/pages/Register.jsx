import React, { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

export const Register = () => {
  const [formdata, setFormdata] = useState({
    username: "",
    email: "",
    password: "",
    verifyPassword: "",
  });

  const [error, setErrors] = useState("");
  const [successMessage, setsuccessMessage] = useState("");
  const navegate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata((prevdata) => ({
      ...prevdata,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formdata.password !== formdata.verifyPassword) {
      setErrors("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/register",
        formdata
      );
      setsuccessMessage("Successfully Registered");
      setErrors("");

      setTimeout(() => {
        navegate("/login");
      }, 1000);
      // console.log("User register succesfully ", response.data);
    } catch (error) {
      if (error.response && error.response.data.message){
        setErrors(error.response.data.message)
      }else{
        setErrors("An accoured error during registration")
      }
    }
  };

  return (
    <section className="p-2 mt-[56px] m-5 mx-auto  flex flex-col items-center  ">
      <div className="md:w-[600px]  xs:max-w-[555px] h-[555px] text-center bg-white mx-auto  px-14 py-11 rounded-md">
        <h3 className="text-3xl font-bold text-center">Sign Up</h3>
        {error && <span className="font-bold my-3 text-xl text-red-700">{error}</span>}
        {successMessage && <p className="font-extrabold my-3 text-xl text-green-800"> {successMessage}</p>}
        <form id="register-form" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4 mt-7 ">
            <input
              type="text"
              name="username"
              placeholder="Your Name"
              value={formdata.username}
              onChange={handleChange}
              className="h-14 w-full  bg-slate-900/5 p-5 outline-none rounded-xl"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formdata.email}
              onChange={handleChange}
              className="h-14 w-full  bg-slate-900/5 p-5 outline-none rounded-xl"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formdata.password}
              onChange={handleChange}
              className="h-14 w-full  bg-slate-900/5 p-5 outline-none rounded-xl"
            />
            <input
              type="password"
              name="verifyPassword"
              placeholder="Re-Enter Password"
              value={formdata.verifyPassword}
              onChange={handleChange}
              className="h-14 w-full  bg-slate-900/5 p-5 outline-none rounded-xl"
            />
          </div>

          <button
            type="submit"
            className="px-5 py-3 text-center text-white bg-black w-full my-5 rounded-md"
          >
            Submit
          </button>
        </form>

        <div className="text-black font-bold ">
          <p className="">
            Already have and account?{" "}
            <span className="text-yellow-400 underline cursor-pointer">
              <NavLink to={"/login"}>Login</NavLink>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
