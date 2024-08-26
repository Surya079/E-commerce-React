import React from "react";

export const NewLetter = () => {
  return (
    <section className="text-center py-12 xl:py-28 bg-white">
      <div className="mx-auto xl:w-[80%] flex flex-col items-center gap-y-8">
        <h3 className="text-5xl max-[450px]:text-2xl font-bold">
          Get Exclusive Offers on Your Email
        </h3>
        <h4 className="uppercase max-[450px]:text-sm max-[450px]:px-2">
          Subscribe to our newsletter and stay updated
        </h4>
        <div className="flex justify-between mx-3 rounded-full ring-1 ring-slate-900/5 hover:ring-slate-900/15 bg-primary w-full max-w-[450px]">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full bg-transparent ml-7 border-none outline-none font-serif max-[450px]:text-sm text-lg"
          />
          <button  className="rounded-full bg-black p-3 px-4 text-white">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};
