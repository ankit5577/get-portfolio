import React from 'react'
import certificationImg from "../assets/images/certification1.svg";
import experienceImg from "../assets/images/experience.svg";

function ExperienceCertification() {
  return (
    <section className="snap-start flex flex-col h-screen flex-wrap gap-2 md:p-8 md:py-8">
        <section id="experience" className="md:p-2">
            <div className="flex flex-row gap-4 my-4">
              <img
                src={experienceImg}
                className="h-16 md:max-h-24"
                alt="experience"
              />
              <h3 className="flex self-center align-bottom md:text-5xl text-2xl tracking-wider font-medium">
              Experience
              </h3>
            </div>
            <div className="flex flex-col gap-2 flex-wrap">
              <a
                href="https://www.aiboost.in/"
                target="_blank"
                rel="noreferrer"
                className="shadow-xl hover:cursor-pointer bg-slate-600/2 filter backdrop-blur-lg p-4 rounded-lg my-4 flex flex-row gap-2"
              >
                <div className="max-w-[60px] md:max-w-[100px] p-1 md:p-2">
                  <img
                    src="https://aiboost.in/assets/img/logo-circle.png"
                    className="bg-cover"
                    alt="aiboost logo"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="antialiased md:tracking-wider font-medium text-xl md:text-2xl tracking-wide">
                    AiBoost
                  </h4>
                  <span className="text-xs antialiased tracking-widest animate-pulse text-teal-500">
                    https://www.aiboost.in/
                  </span>
                  <h5 className="text-green-500 font-medium antialiased text-sm md:text-md lg:text-lg">
                    Founder | Full Stack Web3{" "}
                    <span className="hidden md:inline-block">Developer</span>
                  </h5>

                  <p className="text-slate-300 font-light text-sm">
                    Aug 2021 - present
                  </p>
                </div>
              </a>
            </div>
          </section>

          <section id="certifications" className="md:p-2">
            <div className="flex flex-row gap-4 my-4">
              <img
                src={certificationImg}
                className="h-16 md:max-h-24"
                alt="certifications"
              />
              <h3 className="flex self-center align-bottom md:text-5xl text-2xl tracking-wider font-medium">
              Certifications
              </h3>
            </div>
            <div className="flex flex-col gap-2 flex-wrap">
              <a
                href="https://www.coursera.org/account/accomplishments/specialization/MHUSZPYR573T"
                target="_blank"
                rel="noreferrer"
                className="shadow-xl hover:cursor-pointer bg-slate-600/2 filter backdrop-blur-lg p-4 rounded-lg my-4 flex flex-row gap-2"
              >
                <div className="">
                  <h4 className="antialiased md:tracking-wider font-medium text-xl md:text-2xl tracking-wide">
                    IBM AI Engineering
                    <span className="text-xs text-green-500"> - IBM</span>
                  </h4>
                  <span className="text-xs antialiased tracking-widest animate-pulse truncate text-teal-500">
                    https://www.coursera.org/
                  </span>
                  <h5 className="text-green-500 font-medium antialiased text-sm md:text-md tracking-wide">
                    <span className="text-slate-500 text-xs">ID: </span>
                    MHUSZPYR573T{" "}
                    <span className="text-slate-300 font-light text-sm">
                      {" "}
                      <span className='text-slate-500'>|</span> June 15, 2020
                    </span>
                  </h5>
                </div>
              </a>

              <a
                href="https://www.coursera.org/account/accomplishments/specialization/3ANLTHW9HCN5"
                target="_blank"
                rel="noreferrer"
                className="shadow-xl hover:cursor-pointer bg-slate-600/2 filter backdrop-blur-lg p-4 rounded-lg"
              >
                <div className="">
                  <h4 className="antialiased md:tracking-wider font-medium text-xl md:text-2xl tracking-wide">
                    UI/UX Design{" "}
                    <span className="hidden md:inline-block">
                      Specialization
                    </span>
                    <span className="text-xs text-green-500"> - CalArts</span>
                  </h4>
                  <span className="text-xs antialiased tracking-widest animate-pulse truncate text-teal-500">
                    https://www.coursera.org/
                  </span>
                  <h5 className="text-green-500 font-medium antialiased text-sm md:text-md tracking-wide">
                    <span className="text-slate-500 text-xs">ID: </span>
                    3ANLTHW9HCN5{" "}
                    <span className="text-slate-300 font-light text-sm">
                      {" "}
                      <span className='text-slate-500'>|</span> April 6, 2020
                    </span>
                  </h5>
                </div>
              </a>
            </div>
          </section>
        </section>
  )
}

export default ExperienceCertification