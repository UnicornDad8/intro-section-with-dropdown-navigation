import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-center flex-col md:flex-row wrapper h-full">
      <div className="md:px-2 px-0 bg-red-400 md:w-1/2 w-full h-full">
        <h1 className="text-3xl font-bold">
          Make
          <br />
          remote work
        </h1>
      </div>
      <div className="bg-blue-300 md:w-1/2 w-full h-full flex -order-1 md:order-1">
        world
      </div>
    </section>
  );
};

export default Hero;
