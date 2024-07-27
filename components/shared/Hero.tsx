"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import dynamic from "next/dynamic";

const MediaQuery = dynamic(() => import("react-responsive"), {
  ssr: false,
});

const Hero = () => {
  return (
    <section className="flex flex-center flex-col md:flex-row wrapper h-full">
      <div className="flex flex-col justify-center items-center md:items-start md:px-2 md:pr-10 px-0 py-3 md:w-1/2 w-full h-full">
        <div className="flex flex-row md:flex-col">
          <h1 className="text-[40px] md:text-7xl font-bold">Make</h1>
          <h1 className="text-[40px] md:text-7xl md:ml-0 ml-3 font-bold">
            remote work
          </h1>
        </div>
        <p className="text-gray-500 mx-auto text-center md:ml-0 md:text-left text-base md:text-lg md:my-10 my-4 w-[400px]">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <Button className="text-gray-100 h-[50px] rounded-lg px-6 bg-black hover:scale-90 transition-all duration-300">
          Learn more
        </Button>
        <div className="w-full px-2 md:px-0 mt-6 md:mt-[130px] grid grid-rows-1 grid-cols-4 gap-12">
          <div className="flex flex-center">
            <Image
              src="/images/client-databiz.svg"
              alt="databiz logo"
              width={200}
              height={100}
              className="object-contain h-full w-full"
            />
          </div>
          <div className="flex flex-center h-[38px]">
            <Image
              src="/images/client-audiophile.svg"
              alt="audiophile logo"
              width={200}
              height={100}
              className="object-contain h-full w-full"
            />
          </div>
          <div className="flex flex-center h-[30px]">
            <Image
              src="/images/client-meet.svg"
              alt="meet logo"
              width={200}
              height={100}
              className="object-contain h-full w-full"
            />
          </div>
          <div className="flex flex-center">
            <Image
              src="/images/client-maker.svg"
              alt="maker logo"
              width={200}
              height={100}
              className="object-contain h-full w-full"
            />
          </div>
        </div>
      </div>
      <div className="md:w-1/2 w-full flex justify-end h-full -order-1 md:order-1">
        <div className="w-full h-full md:ml-24">
          <MediaQuery minWidth={769}>
            {(matches) =>
              matches ? (
                <Image
                  src="/images/image-hero-desktop.png"
                  alt="hero desktop"
                  width={440}
                  height={600}
                />
              ) : (
                <Image
                  src="/images/image-hero-mobile.png"
                  alt="Hero mobile"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              )
            }
          </MediaQuery>
        </div>
      </div>
    </section>
  );
};

export default Hero;
