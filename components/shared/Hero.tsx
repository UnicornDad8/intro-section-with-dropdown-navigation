import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-center flex-col md:flex-row wrapper h-full">
      <div className="flex flex-col justify-center items-center md:items-start md:px-2 px-0 py-3 md:w-1/2 w-full h-full">
        <div className="flex flex-row md:flex-col">
          <h1 className="text-[42px] md:text-7xl font-bold">Make</h1>
          <h1 className="text-[42px] md:text-7xl md:ml-0 ml-3 font-bold">
            remote work
          </h1>
        </div>
        <p className="text-gray-500 mx-auto text-center md:ml-0 md:text-left text-base md:text-lg md:my-10 my-4 w-[400px]">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
      </div>
      <div className="bg-blue-300 md:w-1/2 w-full h-full flex -order-1 md:order-1">
        world
      </div>
    </section>
  );
};

export default Hero;
