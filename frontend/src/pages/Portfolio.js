import React from "react";

function Portfolio() {
  return (
    <div className="relative min-h-screen bg-neutral-900 p-12 ">
      <div className="absolute filter mix-blend-overlay bg-red-200 p-48 rounded-full  blur-xl"></div>
      <div className="container n max-w-7xl p-8 bg-white rounded-xl mx-auto bg-opacity-20">
        {/* heading */}
        <section id="header" className=" border-b border-gray-200 pb-4">
          <h1 className="text-4xl text-gray-200 antialiased font-mono text-center">
            Ankit Kaushal
          </h1>
          <h2 className="text-lg antialiased font-serif text-center">
            Full Stack Web3 Developer | Blockchain | AWS
          </h2>
        </section>
      </div>
    </div>
  );
}

export default Portfolio;
