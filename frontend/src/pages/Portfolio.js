import React from "react";
import developerImg from "../assets/images/developer.svg";

function Portfolio() {
  return (
    <div
      className={`snap-y snap-mandatory h-screen overflow-y-scroll overflow-x-hidden scroll-smooth
                    bg-slate-900 font-sans text-gray-300 `}
    >
      {/* background */}
      <div className="absolute filter bg-slate-700 p-8 rounded-full blur-sm shadow-xl bg-blend-screen opacity-20"></div>
      <div className="absolute transform -translate-x-12 filter bg-pink-700 p-12 rounded-full blur-sm shadow-xl bg-blend-overlay opacity-10"></div>
      <div className="absolute filter bg-slate-700 p-8 rounded-full blur-sm shadow-xl bg-blend-screen opacity-20"></div>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 right-20 md:h-60 md:w-64 h-36 w-36 text-zinc-600 filter blur-[2px] bg-blend-multiply"
      >
        <path d="M15 4H21V10H15V4Z" fill="currentColor" />
        <path
          d="M3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12H17C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12H3Z"
          fill="currentColor"
        />
        <path
          d="M6 10C7.65685 10 9 8.65685 9 7C9 5.34315 7.65685 4 6 4C4.34315 4 3 5.34315 3 7C3 8.65685 4.34315 10 6 10Z"
          fill="currentColor"
        />
      </svg>

      <div
        className=" relative filter backdrop-blur-xl
       bg-slate-500 bg-opacity-10 container max-w-7xl w-full p-8 rounded-xl mx-auto
        border-2 border-slate-800 shadow-2xl"
      >
        {/* front */}
        <section id="header" className="flex snap-start min-h-screen p-8 ">
          <div className="self-center mx-auto h-full">
            <img
              src={developerImg}
              className="max-w-xs w-full mx-auto"
              alt="developer"
            />
            <h1 className="lg:text-7xl md:text-5xl text-4xl font-bold text-gray-200 antialiased text-center">
              Ankit Kaushal
            </h1>
            <div className="flex">
              <div className="lg:text-lg p-2 mx-auto text-green-500 font-medium text-xs md:text-sm antialiased tracking-wider">
                Full Stack Web3 | Blockchain | AWS
              </div>
            </div>
          </div>
        </section>

        <section className="snap-start h-screen flex flex-wrap flex-row gap-2 p-8">
          <section id="education" className="p-2 flex-1">
            <h3 className="md:text-4xl text-2xl tracking-wider font-medium">
              Education
            </h3>
            <div className="text-md">Angular</div>
          </section>
          <section id="education" className="p-2 flex-1">
            <h3 className="md:text-4xl text-2xl tracking-wider font-medium">
              Education
            </h3>
            <div className="text-md">Angular</div>
          </section>
        </section>

        <section className="snap-start h-screen flex flex-wrap flex-row gap-2 p-8">
          <section id="education" className="p-2 flex-1">
            <h3 className="md:text-4xl text-2xl tracking-wider font-medium">
              Education
            </h3>
            <div className="text-md">Angular</div>
          </section>
          <section id="education" className="p-2 flex-1">
            <h3 className="md:text-4xl text-2xl tracking-wider font-medium">
              Education
            </h3>
            <div className="text-md">Angular</div>
          </section>
        </section>
      </div>
    </div>
  );
}

export default Portfolio;
