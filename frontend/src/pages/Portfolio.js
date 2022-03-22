import React from "react";
import developerImg from "../assets/images/developer.svg";
import studyingImg from "../assets/images/studying.svg";

import { AiOutlineArrowDown } from "react-icons/ai";
import BlockRevealAnimation from "react-block-reveal-animation";

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
       bg-slate-500 bg-opacity-10 container max-w-7xl w-full p-4 md:p-8 rounded-xl mx-auto
        border-2 border-slate-800 shadow-2xl"
      >
        {/* front */}
        <section
          id="header"
          className="flex flex-col snap-start min-h-screen p-8 gap-4"
        >
          <div className="flex-1 flex mx-auto h-full">
            <div className="my-auto self-center h-full">
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
                  <BlockRevealAnimation
                    delay={0.2}
                    duration={1}
                    color="#44B508"
                  >
                    Full Stack Web3 | Blockchain | AWS
                  </BlockRevealAnimation>
                </div>
              </div>
            </div>
          </div>
          <div className="min-h-[100px] animate animate-bounce">
            <AiOutlineArrowDown className="mx-auto text-4xl shadow-xl shadow-green-900 rounded-full bg-slate-800 p-2" />
          </div>
        </section>

        {/* education */}
        <section className="snap-start flex flex-col h-screen flex-wrap gap-2 md:p-8 p-2 py-8">
          <section id="education" className="p-2 flex-1">
            <img src={studyingImg} className="max-h-36" alt="education" />
            <h3 className="md:text-5xl text-3xl tracking-wider font-medium mb-4">
              Education
            </h3>

            <div className="relative flex flex-row gap-2 flex-wrap">
              <div className="flex-3 self-center align-middle w-[200px] lg:text-3xl lg:w-[300px] p-4 text-2xl font-bold text-center text-slate-500">
                <span>2018 - 2021</span>
              </div>
              <div className="relative border-l border-slate-300">
                <span className="absolute -left-[7px] -top-[2px] animate-ping px-[7px] py-[7px] bg-teal-400 rounded-full"></span>
                <span className="absolute -left-[5px] top-0  px-[5px] py-[5px] bg-teal-700 rounded-full"></span>
              </div>
              <div className="ml-4 flex-1 p-4 bg-slate-700 rounded-lg backdrop-blur-2xl ">
                <h4 className="antialiased tracking-wide md:tracking-wider font-medium text-xl">
                  Chandigarh University
                </h4>
                <h5 className="text-green-500 font-medium">
                  Bachelors of Engineering{" "}
                  <span className="text-slate-400">|</span> CSE
                </h5>
                <h6 className="text-sm">
                  CGPA:{" "}
                  <span className="text-green-500 font-medium tracking-wider">
                    6.9
                  </span>
                </h6>
              </div>
            </div>

            <div className="relative my-4 flex flex-row gap-2 flex-wrap">
              <div className="flex-3 self-center align-middle w-[200px] p-4 text-2xl lg:text-3xl lg:w-[300px] font-bold text-center text-slate-500">
                <p className="text-center">2014 - 2017</p>
              </div>
              <div className="relative border-l border-slate-300">
                <span className="absolute -left-[5.5px] -top-[2px] animate animate-pulse px-[5px] py-[5px] bg-teal-400 rounded-full"></span>
              </div>
              <div className="flex-1 ml-4 p-4 bg-slate-800/3 rounded-lg backdrop-blur-md">
                <h4 className="antialiased tracking-wide md:tracking-wider  font-medium text-xl">
                  Ludhiana Polytechnic
                </h4>
                <h5 className="text-green-500 font-medium">
                  Diploma <span className="text-slate-400">|</span> Mechanical
                </h5>
              </div>
            </div>

            <div className="relative flex flex-row gap-2 flex-wrap">
              <div className="flex-3 self-center align-middle w-[200px] p-4 text-2xl lg:text-3xl lg:w-[300px] font-bold text-center text-slate-500">
                <span>XXXX - 2014</span>
              </div>
              <div className="relative border-l border-slate-300">
                <span className="absolute -left-[5.5px] -top-[2px] animate animate-pulse px-[5px] py-[5px] bg-teal-400 rounded-full"></span>
              </div>
              <div className="flex-1 ml-4 p-4 bg-slate-800/3 rounded-lg backdrop-blur-md">
                <h4 className="antialiased tracking-wide md:tracking-wider  font-medium text-xl">
                  St.Thomas, School
                </h4>
                <h5 className="text-green-500 font-medium">
                  Secondary <span className="text-slate-400">|</span> CBSE
                </h5>
              </div>
            </div>
          </section>
        </section>

        {/* skills / experience */}
        <section className="snap-start flex flex-col h-screen flex-wrap gap-2 md:p-8 p-2 py-8">
          <section id="education" className="p-2 flex-1">
            <img src={studyingImg} className="max-h-36" alt="education" />
            <h3 className="md:text-5xl text-3xl tracking-wider font-medium">
              Experience
            </h3>
            <div className="flex flex-col gap-2 flex-wrap">
              <div className="shadow-md hover:cursor-pointer bg-slate-600 filter backdrop-blur-lg p-4 rounded-lg my-4">
                <h4 className="antialiased tracking-wide md:tracking-wider font-medium text-xl">
                  Chandigarh University
                </h4>
                <h5 className="text-green-500 font-medium">
                  Bachelors of Engineering in CSE
                </h5>
                <h6 className="text-sm">
                  CGPA:{" "}
                  <span className="text-green-500 font-medium tracking-wider">
                    6.9
                  </span>
                </h6>
                <p className="text-slate-300 font-light text-sm">
                  May 2018 - July 2021 📍 Punjab, India
                </p>
              </div>

              <div className="shadow-md hover:cursor-pointer bg-slate-600 filter backdrop-blur-lg p-4 rounded-lg my-4">
                <h4 className="antialiased tracking-wide md:tracking-wider  font-medium text-xl">
                  Ludhiana Polytechnic College
                </h4>
                <h5 className="text-green-500 font-medium">
                  Diploma in Mechanical Engineering
                </h5>
                <p className="text-slate-300 font-light text-sm">
                  May 2018 - July 2021 📍 Punjab, India
                </p>
              </div>

              <div className="shadow-md hover:cursor-pointer bg-slate-600 filter backdrop-blur-lg p-4 rounded-lg my-4">
                <h4 className="antialiased tracking-wide md:tracking-wider  font-medium text-xl">
                  St.Thomas, School
                </h4>
                <h5 className="text-green-500 font-medium">Secondary | CBSE</h5>
                <p className="text-slate-300 font-light text-sm">
                  May 2018 - July 2021 📍 Punjab, India
                </p>
              </div>
            </div>
          </section>
        </section>

        {/* Certifications / ratings / achievements */}
        <section className="snap-start flex flex-col h-screen flex-wrap gap-2 md:p-8 p-2 py-8">
          <section id="education" className="p-2 flex-1">
            <img src={studyingImg} className="max-h-36" alt="education" />
            <h3 className="md:text-5xl text-3xl tracking-wider font-medium">
              Experience
            </h3>
            <div className="flex flex-col gap-2 flex-wrap">
              <div className="shadow-md hover:cursor-pointer bg-slate-600 filter backdrop-blur-lg p-4 rounded-lg my-4">
                <h4 className="antialiased tracking-wide md:tracking-wider font-medium text-xl">
                  Chandigarh University
                </h4>
                <h5 className="text-green-500 font-medium">
                  Bachelors of Engineering in CSE
                </h5>
                <h6 className="text-sm">
                  CGPA:{" "}
                  <span className="text-green-500 font-medium tracking-wider">
                    6.9
                  </span>
                </h6>
                <p className="text-slate-300 font-light text-sm">
                  May 2018 - July 2021 📍 Punjab, India
                </p>
              </div>

              <div className="shadow-md hover:cursor-pointer bg-slate-600 filter backdrop-blur-lg p-4 rounded-lg my-4">
                <h4 className="antialiased tracking-wide md:tracking-wider  font-medium text-xl">
                  Ludhiana Polytechnic College
                </h4>
                <h5 className="text-green-500 font-medium">
                  Diploma in Mechanical Engineering
                </h5>
                <p className="text-slate-300 font-light text-sm">
                  May 2018 - July 2021 📍 Punjab, India
                </p>
              </div>

              <div className="shadow-md hover:cursor-pointer bg-slate-600 filter backdrop-blur-lg p-4 rounded-lg my-4">
                <h4 className="antialiased tracking-wide md:tracking-wider  font-medium text-xl">
                  St.Thomas, School
                </h4>
                <h5 className="text-green-500 font-medium">Secondary | CBSE</h5>
                <p className="text-slate-300 font-light text-sm">
                  2014 📍 Punjab, India
                </p>
              </div>
            </div>
          </section>
        </section>

        {/* Projects */}
        <section className="snap-start flex flex-col h-screen flex-wrap gap-2 md:p-8 p-2 py-8">
          <section id="education" className="p-2 flex-1">
            <img src={studyingImg} className="max-h-36" alt="education" />
            <h3 className="md:text-5xl text-3xl tracking-wider font-medium">
              Experience
            </h3>
            <div className="flex flex-col gap-2 flex-wrap">
              <div className="shadow-md hover:cursor-pointer bg-slate-600 filter backdrop-blur-lg p-4 rounded-lg my-4">
                <h4 className="antialiased tracking-wide md:tracking-wider font-medium text-xl">
                  Chandigarh University
                </h4>
                <h5 className="text-green-500 font-medium">
                  Bachelors of Engineering in CSE
                </h5>
                <h6 className="text-sm">
                  CGPA:{" "}
                  <span className="text-green-500 font-medium tracking-wider">
                    6.9
                  </span>
                </h6>
                <p className="text-slate-300 font-light text-sm">
                  May 2018 - July 2021 📍 Punjab, India
                </p>
              </div>

              <div className="shadow-md hover:cursor-pointer bg-slate-600 filter backdrop-blur-lg p-4 rounded-lg my-4">
                <h4 className="antialiased tracking-wide md:tracking-wider  font-medium text-xl">
                  Ludhiana Polytechnic College
                </h4>
                <h5 className="text-green-500 font-medium">
                  Diploma in Mechanical Engineering
                </h5>
                <p className="text-slate-300 font-light text-sm">
                  May 2018 - July 2021 📍 Punjab, India
                </p>
              </div>

              <div className="shadow-md hover:cursor-pointer bg-slate-600 filter backdrop-blur-lg p-4 rounded-lg my-4">
                <h4 className="antialiased tracking-wide md:tracking-wider  font-medium text-xl">
                  St.Thomas, School
                </h4>
                <h5 className="text-green-500 font-medium">Secondary | CBSE</h5>
                <p className="text-slate-300 font-light text-sm">
                  May 2018 - July 2021 📍 Punjab, India
                </p>
              </div>
            </div>
          </section>
        </section>

        {/* Contact me */}
        <section className="snap-start flex flex-col h-screen flex-wrap gap-2 md:p-8 p-2 py-8">
          <section id="education" className="p-2 flex-1">
            <img src={studyingImg} className="max-h-36" alt="education" />
            <h3 className="md:text-5xl text-3xl tracking-wider font-medium">
              Experience
            </h3>
            <div className="flex flex-col gap-2 flex-wrap">
              <div className="shadow-md hover:cursor-pointer bg-slate-600 filter backdrop-blur-lg p-4 rounded-lg my-4">
                <h4 className="antialiased tracking-wide md:tracking-wider font-medium text-xl">
                  Chandigarh University
                </h4>
                <h5 className="text-green-500 font-medium">
                  Bachelors of Engineering in CSE
                </h5>
                <h6 className="text-sm">
                  CGPA:{" "}
                  <span className="text-green-500 font-medium tracking-wider">
                    6.9
                  </span>
                </h6>
                <p className="text-slate-300 font-light text-sm">
                  May 2018 - July 2021 📍 Punjab, India
                </p>
              </div>

              <div className="shadow-md hover:cursor-pointer bg-slate-600 filter backdrop-blur-lg p-4 rounded-lg my-4">
                <h4 className="antialiased tracking-wide md:tracking-wider  font-medium text-xl">
                  Ludhiana Polytechnic College
                </h4>
                <h5 className="text-green-500 font-medium">
                  Diploma in Mechanical Engineering
                </h5>
                <p className="text-slate-300 font-light text-sm">
                  May 2018 - July 2021 📍 Punjab, India
                </p>
              </div>

              <div className="shadow-md hover:cursor-pointer bg-slate-600 filter backdrop-blur-lg p-4 rounded-lg my-4">
                <h4 className="antialiased tracking-wide md:tracking-wider  font-medium text-xl">
                  St.Thomas, School
                </h4>
                <h5 className="text-green-500 font-medium">Secondary | CBSE</h5>
                <p className="text-slate-300 font-light text-sm">
                  May 2018 - July 2021 📍 Punjab, India
                </p>
              </div>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}

export default Portfolio;
