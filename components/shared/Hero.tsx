import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-center flex-col md:flex-row wrapper">
      <div className="md:px-2 px-0 bg-red-400 md:w-1/2 w-full">
        <h1>Hello</h1>
      </div>
      <div className="bg-blue-300 md:w-1/2 w-full">world</div>
    </section>
  );
};

export default Hero;
