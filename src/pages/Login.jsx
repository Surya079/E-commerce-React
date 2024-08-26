import React from "react";

export const Login = () => {
  return (
    <section className="p-2 mt-[56px] m-5 mx-auto  flex flex-col items-center  ">
      <div className="md:w-[600px]  xs:max-w-[555px] h-[500px] bg-white mx-auto  px-14 py-10 rounded-md">
        <h3 className="text-3xl font-bold">Sign Up</h3>
        <div className="flex flex-col gap-4 mt-7 ">
          <input
            type="text"
            placeholder="Your Name"
            className="h-14 w-full  bg-slate-900/5 p-5 outline-none rounded-xl"
          />
          <input
            type="text"
            placeholder="Email"
            className="h-14 w-full  bg-slate-900/5 p-5 outline-none rounded-xl"
          />
          <input
            type="text"
            placeholder="Password"
            className="h-14 w-full  bg-slate-900/5 p-5 outline-none rounded-xl"
          />
        </div>
        <button className="px-5 py-3 text-center text-white bg-black w-full my-5 rounded-md">
          Continue
        </button>
        <div className="text-black font-bold">
          <p className="">
            Already have and account? <span className="text-yellow-400 underline cursor-pointer">Login</span>
          </p>
        </div>
      </div>
    </section>
  );
};
