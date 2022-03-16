import React from "react";

function Portfolio() {
  return (
    <div className="relative min-h-screen bg-slate-900 p-12 -z-10 font-sans text-gray-300">
      <div className="absolute bg-red-200 p-48 rounded-full filter blur-sm shadow-xl mix-blend-color-dodge opacity-20"></div>
      <div className="relative filter backdrop-blur-xl bg-slate-500 bg-opacity-10 container max-w-7xl p-8 z-10 rounded-xl mx-auto border-2 border-slate-800 shadow-2xl">
        {/* heading */}
        <section id="header" className=" border-b border-slate-600 pb-4">
          <h1 className="text-4xl font-bold text-gray-200 antialiased text-center">
            Ankit Kaushal
          </h1>
          <h4 className="text-lg antialiased font-normal text-center tracking-wide">
            Full Stack Web3 Developer | Blockchain | AWS
          </h4>
        </section>
        <section className="flex flex-wrap flex-row gap-2">
        <section id="education" className="p-2 flex-1">
          <h3 className="text-4xl tracking-wider font-medium">Education</h3>
          <div className="">
            Angular
          </div>
        </section>
        <section id="skills" className="p-2 flex-1">
          <h3 className="text-4xl tracking-wider font-medium">Skills</h3>
          <div className="">
            Angular
          </div>
        </section>
        </section>
        
      </div>
    </div>
  );
}

export default Portfolio;
