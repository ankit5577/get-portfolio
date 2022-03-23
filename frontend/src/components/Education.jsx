import React from 'react'
import studyingImg from "../assets/images/studying.svg";

function Education() {
  return (
    <section className="snap-start flex flex-col h-screen flex-wrap gap-2 md:p-8 py-2 md:py-8">
          <section id="education" className="md:p-2 flex-1">
            <img
              src={studyingImg}
              className="h-16 md:max-h-24"
              alt="education"
            />
            <h3 className="flex self-center mb-4 align-bottom md:text-5xl text-2xl tracking-wider font-medium">
              Education
            </h3>

            <div className="relative flex flex-col md:flex-row flex-wrap">
              <div className="flex-3 md:self-center align-middle w-[200px] lg:text-3xl lg:w-[300px] md:p-4 text-xl font-bold text-slate-500">
                <span className="text-slate-400">2018 - 2021</span>
              </div>
              <div className="relative hidden md:block border-l border-slate-300">
                <span className="absolute -left-[7px] -top-[2px] animate-ping px-[7px] py-[7px] bg-teal-400 rounded-full"></span>
                <span className="absolute -left-[5px] top-0  px-[5px] py-[5px] bg-teal-700 rounded-full"></span>
              </div>
              <div className="md:ml-4 flex-1 p-4 bg-slate-700 shadow-xl rounded-lg backdrop-blur-2xl ">
                <h4 className="antialiased tracking-wide md:tracking-wider font-medium text-xl">
                  Chandigarh University
                </h4>
                <h5 className="text-green-500 font-medium text-sm tracking-wide antialiased">
                  BE <span className="text-slate-400">|</span> Computer Science
                  Engineering
                </h5>
                <h6 className="text-sm">
                  CGPA:{" "}
                  <span className="text-green-500 font-medium tracking-wider">
                    6.9
                  </span>
                </h6>
              </div>
            </div>

            <div className="relative my-4 flex flex-col md:flex-row flex-wrap">
              <div className="flex-3 md:self-center align-middle w-[200px] md:p-4 text-xl lg:text-3xl lg:w-[300px] font-bold text-slate-500">
                <p className="text-slate-400">2014 - 2017</p>
              </div>
              <div className="relative hidden md:block border-l border-slate-300">
                <span className="absolute -left-[5.5px] -top-[2px] animate animate-pulse px-[5px] py-[5px] bg-teal-400 rounded-full"></span>
              </div>
              <div className="flex-1 md:ml-4 p-4 bg-slate-800/3 rounded-lg shadow-md backdrop-blur-md">
                <h4 className="antialiased tracking-wide md:tracking-wider  font-medium text-xl">
                  Ludhiana Polytechnic
                </h4>
                <h5 className="text-green-500 font-medium text-sm tracking-wide antialiased">
                  Diploma <span className="text-slate-400">|</span> Mechanical
                </h5>
              </div>
            </div>

            <div className="relative flex flex-col md:flex-row flex-wrap">
              <div className="flex-3 md:self-center align-middle w-[200px] md:p-4 text-xl lg:text-3xl lg:w-[300px] font-bold text-slate-500">
                <p className="text-slate-400">XXXX - 2014</p>
              </div>
              <div className="relative hidden md:block border-l border-slate-300">
                <span className="absolute -left-[5.5px] -top-[2px] animate animate-pulse px-[5px] py-[5px] bg-teal-400 rounded-full"></span>
              </div>
              <div className="flex-1 md:ml-4 p-4 bg-slate-800/3 rounded-lg shadow-md backdrop-blur-md">
                <h4 className="antialiased tracking-wide md:tracking-wider  font-medium text-xl">
                  St.Thomas, School
                </h4>
                <h5 className="text-green-500 font-medium text-sm tracking-wide antialiased">
                  Secondary <span className="text-slate-400">|</span> CBSE
                </h5>
              </div>
            </div>
          </section>
        </section>
  )
}

export default Education