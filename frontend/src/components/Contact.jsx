import React from "react";
import reachmeImg from "../assets/images/reachme.svg";

function Contact() {
  return (
    <section className="snap-start flex flex-col h-screen flex-wrap gap-2 md:p-8 py-2 md:py-8">
      <section id="contact" className="md:p-2 flex-1">
        <div className="flex flex-col gap-2 my-4">
          <img src={reachmeImg} className="max-w-xs mx-auto" alt="education" />
          <h3 className="flex self-center align-bottom md:text-5xl text-2xl tracking-wider font-medium">
            Reach Me
          </h3>
        </div>
        <div className="flex flex-row gap-4 flex-wrap">
          <div className="flex-1 p-4">
            <div className="relative flex flex-col md:flex-row flex-wrap my-2 md:my-4">
              <div className="flex-3 md:self-center align-middle w-[140px] lg:text-2xl lg:w-[160px] md:p-4 text-xl font-bold text-slate-500">
                <span className="text-slate-400">GitHub</span>
              </div>
              <a
                href="https://www.aiboost.in/"
                target="_blank"
                rel="noreferrer"
                className="hover:cursor-pointer rounded-lg flex flex-row gap-1"
              >
                <div className="flex-1 md:ml-4 p-4 bg-slate-800/3 rounded-lg shadow-md backdrop-blur-md">
                  <h4 className="antialiased tracking-wide md:tracking-wider font-medium text-sm sm:text-md md:text-lg">
                    ankit5577
                  </h4>
                </div>
              </a>
            </div>

            <div className="relative flex flex-col md:flex-row flex-wrap my-2 md:my-4">
              <div className="flex-3 md:self-center align-middle w-[140px] lg:text-2xl lg:w-[160px] md:p-4 text-xl font-bold text-slate-500">
                <span className="text-slate-400">CodeChef</span>
              </div>
              <a
                href="https://www.aiboost.in/"
                target="_blank"
                rel="noreferrer"
                className="hover:cursor-pointer rounded-lg flex flex-row gap-1"
              >
                <div className="flex-1 md:ml-4 p-4 bg-slate-800/3 rounded-lg shadow-md backdrop-blur-md">
                  <h4 className="antialiased tracking-wide md:tracking-wider font-medium text-sm sm:text-md md:text-lg">
                    ankit5577
                  </h4>
                </div>
              </a>
            </div>

            <div className="relative flex flex-col md:flex-row flex-wrap my-2 md:my-4">
              <div className="flex-3 md:self-center align-middle w-[140px] lg:text-2xl lg:w-[160px] md:p-4 text-xl font-bold text-slate-500">
                <span className="text-slate-400">LinkedIn</span>
              </div>
              <a
                href="https://www.aiboost.in/"
                target="_blank"
                rel="noreferrer"
                className="hover:cursor-pointer rounded-lg flex flex-row gap-1"
              >
                <div className="flex-1 md:ml-4 p-4 bg-slate-800/3 rounded-lg shadow-md backdrop-blur-md">
                  <h4 className="antialiased tracking-wide md:tracking-wider font-medium text-sm sm:text-md md:text-lg">
                    ankit5577
                  </h4>
                </div>
              </a>
            </div>
          </div>
          <div className="flex-1 border-l border-green-500 p-4">
            <div className="relative flex flex-col md:flex-row flex-wrap my-2 md:my-4">
              <div className="flex-3 md:self-center align-middle w-[140px] lg:text-2xl lg:w-[160px] md:p-4 text-xl font-bold text-slate-500">
                <span className="text-slate-400">Email</span>
              </div>
              <a
                href="https://www.aiboost.in/"
                target="_blank"
                rel="noreferrer"
                className="hover:cursor-pointer rounded-lg flex flex-row gap-1"
              >
                <div className="flex-1 md:ml-4 p-4 bg-slate-800/3 rounded-lg shadow-md backdrop-blur-md">
                  <h4 className="antialiased tracking-wide md:tracking-wider font-medium text-sm sm:text-md md:text-lg">
                    ankit5577.dev@gmail.com
                  </h4>
                </div>
              </a>
            </div>

            <div className="relative flex flex-col md:flex-row flex-wrap  my-2 md:my-4">
              <div className="flex-3 md:self-center align-middle w-[140px] lg:text-2xl lg:w-[160px] md:p-4 text-xl font-bold text-slate-500">
                <span className="text-slate-400">Phone</span>
              </div>
              <a
                href="https://www.aiboost.in/"
                target="_blank"
                rel="noreferrer"
                className="hover:cursor-pointer rounded-lg flex flex-row gap-1"
              >
                <div className="flex-1 md:ml-4 p-4 bg-slate-800/3 rounded-lg shadow-md backdrop-blur-md">
                  <h4 className="antialiased tracking-wide md:tracking-wider font-medium text-sm sm:text-md md:text-lg">
                    +91 730 7844227
                  </h4>
                </div>
              </a>
            </div>

            <div className="relative flex flex-col md:flex-row flex-wrap my-2 md:my-4">
              <div className="flex-3 md:self-center align-middle w-[140px] lg:text-2xl lg:w-[160px] md:p-4 text-xl font-bold text-slate-500">
                <span className="text-slate-400">Skype</span>
              </div>
              <a
                href="https://www.aiboost.in/"
                target="_blank"
                rel="noreferrer"
                className="hover:cursor-pointer rounded-lg flex flex-row gap-1"
              >
                <div className="flex-1 md:ml-4 p-4 bg-slate-800/3 rounded-lg shadow-md backdrop-blur-md">
                  <h4 className="antialiased tracking-wide md:tracking-wider font-medium text-sm sm:text-md md:text-lg">
                    kaushalankit101010
                  </h4>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Contact;
