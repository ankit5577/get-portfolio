import React from 'react'
import projectImg from "../assets/images/project_completed.svg";
import systemImg from "../assets/images/system.svg";
import overkartImg from "../assets/images/overkart/logo_small.svg";
import medicoeyeImg from "../assets/images/medicoeye/logo_min.svg";

function Projects() {
  return (
    <section className="snap-start flex flex-col h-screen flex-wrap gap-2 md:p-8 py-2 md:py-8">
          <section id="experience" className="md:p-2 flex-1">
            <div className="flex flex-row gap-4 my-4">
              <img
                src={projectImg}
                className="h-16 md:max-h-24"
                alt="Projects"
              />
              <h3 className="flex self-center align-bottom md:text-5xl text-2xl tracking-wider font-medium">
                Projects
              </h3>
            </div>
            <div className="flex flex-col gap-2 md:gap-4 flex-wrap">
              <a
                href="http://www.aiboost.eu.org/"
                target="_blank"
                rel="noreferrer"
                className="shadow-xl hover:cursor-pointer bg-slate-600/2 filter backdrop-blur-lg p-4 rounded-lg flex flex-row gap-1 sm:gap-2"
              >
                <div className="hidden sm:block max-w-[60px] md:max-w-[100px] p-1 md:p-2">
                  <img
                    src="https://aiboost.in/assets/img/logo-circle.png"
                    className="bg-cover"
                    alt="aiboost logo"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="antialiased md:tracking-wider font-medium text-sm sm:text-xl md:text-2xl tracking-wide">
                    AiBoost web3
                    <span className="inline-block float-right text-green-500 text-xs sm:text-sm animate-pulse">
                      Web3 / Blockchain
                    </span>
                  </h4>
                  <span className="text-xs antialiased tracking-widest animate-pulse text-teal-500">
                    http://www.aiboost.eu.org/
                  </span>
                  <h5 className="text-slate-300 font-light antialiased text-xs md:text-md lg:text-lg">
                    Web3 Application with Send Eth, Play Lottery, Stake Coin,
                    Buy AiB coin functionality.
                  </h5>
                  <p className="text-green-600 font-normal tracking-wide text-xs md:text-sm mt-2">
                    <span className="text-slate-500 font-light text-xs">
                      Technology:{" "}
                    </span>
                    ReactJS, ExpressJS, Solidity, Smart Contracts, TailwindCSS, HardHat
                  </p>
                </div>
              </a>

              <a
                href="https://www.medicoeye.in/"
                target="_blank"
                rel="noreferrer"
                className="shadow-xl hover:cursor-pointer bg-slate-600/2 filter backdrop-blur-lg p-4 rounded-lg flex flex-row gap-1 sm:gap-2"
              >
                <div className="hidden sm:block w-[60px] md:w-[100px] p-1 md:p-2">
                  <img
                    src={medicoeyeImg}
                    className="bg-cover w-full"
                    alt="aiboost logo"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="antialiased md:tracking-wider font-medium text-sm sm:text-xl md:text-2xl tracking-wide">
                    MedicoEye
                    <span className="inline-block float-right text-green-500 text-xs sm:text-sm animate-pulse">
                      Web / Deep Learning
                    </span>
                  </h4>
                  <span className="text-xs antialiased tracking-widest animate-pulse text-teal-500">
                    https://www.medicoeye.in/
                  </span>
                  <h5 className="text-slate-300 font-light antialiased text-xs md:text-md lg:text-lg">
                    Hospital Management & Medicine Recommendation System with muli-role functionality.
                  </h5>
                  <p className="text-green-600 font-normal tracking-wide text-xs md:text-sm mt-2">
                    <span className="text-slate-500 font-light text-xs">
                      Technology:{" "}
                    </span>
                    Angular 12, ExpressJS, MongoDB, AWS, NodeJS, Material Design
                  </p>
                </div>
              </a>

              <a
                href="https://overkart.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
                className="shadow-xl hover:cursor-pointer bg-slate-600/2 filter backdrop-blur-lg p-4 rounded-lg flex flex-row gap-1 sm:gap-2"
              >
                <div className="hidden sm:block w-[60px] md:w-[100px] p-1 md:p-2">
                  <img
                    src={overkartImg}
                    className="bg-cover w-full"
                    alt="aiboost logo"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="antialiased md:tracking-wider font-medium text-sm sm:text-xl md:text-2xl tracking-wide">
                    Overkart
                    <span className="inline-block float-right text-green-500 text-xs sm:text-sm animate-pulse">
                      Web
                    </span>
                  </h4>
                  <span className="text-xs antialiased tracking-widest animate-pulse text-teal-500">
                  https://overkart.herokuapp.com/
                  </span>
                  <h5 className="text-slate-300 font-light antialiased text-xs md:text-md lg:text-lg">
                    Generic eCommerce Web Application.
                  </h5>
                  <p className="text-green-600 font-normal tracking-wide text-xs md:text-sm mt-2">
                    <span className="text-slate-500 font-light text-xs">
                      Technology:{" "}
                    </span>
                    Angular 12, ExpressJS, MongoDB, Heroku, NodeJs
                  </p>
                </div>
              </a>

              <a
                href="https://www.github.com/ankit5577/recommender_system"
                target="_blank"
                rel="noreferrer"
                className="shadow-xl hover:cursor-pointer bg-slate-600/2 filter backdrop-blur-lg p-4 rounded-lg flex flex-row gap-1 sm:gap-2"
              >
                <div className="hidden sm:block w-[60px] md:w-[100px] p-1 md:p-2">
                  <img
                    src={systemImg}
                    className="bg-cover"
                    alt="aiboost logo"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="antialiased md:tracking-wider font-medium text-sm sm:text-xl md:text-2xl tracking-wide">
                    Recommender System
                    <span className="inline-block float-right text-green-500 text-xs sm:text-sm animate-pulse">
                      Deep Learning
                    </span>
                  </h4>
                  <span className="text-xs antialiased tracking-wide md:tracking-widest animate-pulse text-teal-500">
                    github.com/ankit5577/recommender_system
                  </span>
                  <h5 className="text-slate-300 font-light antialiased text-xs md:text-md lg:text-lg">
                    Algorithms aimed at suggesting relevant Movies to users
                  </h5>
                  <p className="text-green-600 font-normal tracking-wide text-xs md:text-sm mt-2">
                    <span className="text-slate-500 font-light text-xs">
                      Technology:{" "}
                    </span>
                    Python, NLTK, Scipy
                  </p>
                </div>
                
              </a>

            </div>
          </section>
        </section>
  )
}

export default Projects