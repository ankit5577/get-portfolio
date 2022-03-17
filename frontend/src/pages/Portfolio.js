import React from "react";
import developerImg from "../assets/images/developer.svg";
import studyingImg from "../assets/images/studying.svg";

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

        {/* education */}
        <section className="snap-start flex flex-col h-screen flex-wrap gap-2 md:p-8 p-2 py-8">
          <section id="education" className="p-2 flex-1">
            <img src={studyingImg} className="max-h-36" alt="education" />
            <h3 className="md:text-5xl text-3xl tracking-wider font-medium">
              Education
            </h3>
            <div className="relative col-span-12 sm:px-4 space-y-6 sm:col-span-9">
              <div className="col-span-12 space-y-12 relative sm:px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-slate-700">
                <div className="sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-green-600 shadow-md hover:cursor-pointer bg-slate-600 filter backdrop-blur-lg p-4 rounded-lg my-4">
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
                  <p className="text-slate-300 font-light text-sm">
                    2018 - 2021 📍 Punjab, India
                  </p>
                </div>

                <div className="sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-green-600 shadow-md hover:cursor-pointer bg-slate-600 filter backdrop-blur-lg p-4 rounded-lg my-4">
                  <h4 className="antialiased tracking-wide md:tracking-wider  font-medium text-xl">
                    Ludhiana Polytechnic
                  </h4>
                  <h5 className="text-green-500 font-medium">
                    Diploma <span className="text-slate-400">|</span> Mechanical
                  </h5>
                  <p className="text-slate-300 font-light text-sm">
                    2014 - 2017 📍 Punjab, India
                  </p>
                </div>

                <div className="sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-green-600 shadow-md hover:cursor-pointer bg-slate-600 filter backdrop-blur-lg p-4 rounded-lg my-4">
                  <h4 className="antialiased tracking-wide md:tracking-wider  font-medium text-xl">
                    St.Thomas, School
                  </h4>
                  <h5 className="text-green-500 font-medium">
                    Secondary <span className="text-slate-400">|</span> CBSE
                  </h5>
                  <p className="text-slate-300 font-light text-sm">
                    2014 📍 Punjab, India
                  </p>
                </div>
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
                  May 2018 - July 2021 📍 Punjab, India
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
