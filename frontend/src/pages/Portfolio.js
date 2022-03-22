import React from "react";
import developerImg from "../assets/images/developer.svg";
import studyingImg from "../assets/images/studying.svg";

import experienceImg from "../assets/images/experience.svg";
import certificationImg from "../assets/images/certification1.svg";
import skillsImg from "../assets/images/skills.svg";

import { AiOutlineArrowDown } from "react-icons/ai";
import BlockRevealAnimation from "react-block-reveal-animation";

// logo
import {
  FaPython,
  FaAngular,
  FaAws,
  FaHtml5,
  FaNodeJs,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiTypescript,
  SiMaterialdesign,
  SiTailwindcss,
  SiHeroku,
  SiPostgresql,
  SiMongodb,
  SiPostman,
  SiExpress,
  SiSolidity,
} from "react-icons/si";
import { GrDocker, GrReactjs } from "react-icons/gr";
import { AiFillGithub } from "react-icons/ai";

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
              <div className="flex-3 md:self-center align-middle w-[200px] lg:text-3xl lg:w-[300px] md:p-4 text-2xl font-bold text-slate-500">
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
              <div className="flex-3 md:self-center align-middle w-[200px] md:p-4 text-2xl lg:text-3xl lg:w-[300px] font-bold text-slate-500">
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
              <div className="flex-3 md:self-center align-middle w-[200px] md:p-4 text-2xl lg:text-3xl lg:w-[300px] font-bold text-slate-500">
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

        {/* skills / experience */}
        <section className="snap-start flex flex-col h-screen flex-wrap gap-2 md:p-8 md:py-8">
          <section id="experience" className="md:p-2">
            <div className="flex flex-row gap-4 my-4">
              <img
                src={experienceImg}
                className="h-16 md:max-h-24"
                alt="education"
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
                    Founder | Full Stack Web3 Developer
                  </h5>

                  <p className="text-slate-300 font-light text-sm">
                    Aug 2021 - present
                  </p>
                </div>
              </a>
            </div>
          </section>

          <section id="experience" className="md:p-2">
            <div className="flex flex-row gap-2">
              <img
                src={certificationImg}
                className="h-16 md:max-h-24"
                alt="education"
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
                    IBM AI Engineering<span className="text-xs text-green-500"> - IBM</span>
                  </h4>
                  <span className="text-xs antialiased tracking-widest animate-pulse truncate text-teal-500">
                  https://www.coursera.org/
                  </span>
                  <h5 className="text-green-500 font-medium antialiased text-sm md:text-md">
                    <span className="text-slate-500 text-xs">ID: </span>MHUSZPYR573T <span className="text-slate-300 font-light text-xs"> | June 15, 2020</span>
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
                    UI/UX Design Specialization<span className="text-xs text-green-500"> - CalArts</span>
                  </h4>
                  <span className="text-xs antialiased tracking-widest animate-pulse truncate text-teal-500">
                  https://www.coursera.org/
                  </span>
                  <h5 className="text-green-500 font-medium antialiased text-sm md:text-md">
                    <span className="text-slate-500 text-xs">ID: </span>3ANLTHW9HCN5 <span className="text-slate-300 font-light text-xs"> | April 6, 2020</span>
                  </h5>
                </div>
              </a>  
            </div>
          </section>
        </section>

        {/* Skills */}
        <section className="snap-start flex flex-col h-screen flex-wrap gap-2 md:p-8 py-2 md:py-8">
          <section id="education" className="md:p-2 flex-1">
            <div className="flex flex-row gap-4 my-4">
              <img
                src={skillsImg}
                className="h-16 md:max-h-24"
                alt="education"
              />
              <h3 className="flex self-center align-bottom md:text-5xl text-2xl tracking-wider font-medium">
                Skills
              </h3>
            </div>
            <div className="flex flex-col gap-2 flex-wrap">
              <div className="flex flex-col md:flex-row md:gap-2 flex-wrap">
                <div className="flex-3 md:self-center align-middle w-[170px] md:p-4 text-xl lg:text-3xl lg:w-[200px] font-bold text-slate-500">
                  <p className="text-green-600 md:text-slate-400">Core</p>
                </div>
                <div className="flex-1 md:border-l flex flex-row gap-1 md:gap-2 flex-wrap md:border-slate-600 p-1 md:p-2 text-slate-400 antialiased tracking-wide">
                  <div className="flex flex-row md:gap-2 text-md md:text-lg flex-wrap p-1 md:p-2 border-r border-slate-800">
                    <p>Python</p>
                    <FaPython className="text-md md:text-xl" />
                  </div>
                  <div className="flex flex-row md:gap-2 text-md md:text-lg flex-wrap p-1 md:p-2 border-r border-slate-800">
                    <p>Javascript</p>
                    <IoLogoJavascript className="text-md md:text-xl" />
                  </div>
                  <div className="flex flex-row md:gap-2 text-md md:text-lg flex-wrap p-1 md:p-2 border-r border-slate-800">
                    <p>Node</p>
                    <FaNodeJs className="text-md md:text-xl" />
                  </div>
                  <div className="flex flex-row md:gap-2 text-md md:text-lg flex-wrap p-1 md:p-2">
                    <p>Typescript</p>
                    <SiTypescript className="text-md md:text-xl" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-2 flex-wrap">
                <div className="flex-3 md:self-center align-middle w-[170px] md:p-4 text-xl lg:text-3xl lg:w-[200px] font-bold text-slate-500">
                  <p className="text-green-600 md:text-slate-400">Web</p>
                </div>
                <div className="flex-1 md:border-l flex flex-row gap-1 md:gap-2 flex-wrap md:border-slate-600 p-1 md:p-2 text-slate-400 antialiased tracking-wide">
                  <div className="flex flex-row md:gap-2 text-md md:text-lg flex-wrap p-1 md:p-2 border-r border-slate-800">
                    <p>Angular</p>
                    <FaAngular className="text-md md:text-xl" />
                  </div>
                  <div className="flex flex-row md:gap-2 text-md md:text-lg flex-wrap p-1 md:p-2 border-r border-slate-800">
                    <p>ReactJS</p>
                    <GrReactjs className="text-md md:text-xl" />
                  </div>
                  <div className="flex flex-row md:gap-2 text-md md:text-lg flex-wrap p-1 md:p-2 border-r border-slate-800">
                    <p>ExpressJS</p>
                    <SiExpress className="text-md md:text-xl" />
                  </div>
                  <div className="flex flex-row md:gap-2 text-md md:text-lg flex-wrap p-1 md:p-2 border-r border-slate-800">
                    <p>TailwindCss</p>
                    <SiTailwindcss className="text-md md:text-xl" />
                  </div>
                  <div className="flex flex-row md:gap-2 text-md md:text-lg flex-wrap p-1 md:p-2 border-r border-slate-800">
                    <p>Material Design</p>
                    <SiMaterialdesign className="text-md md:text-xl" />
                  </div>
                  <div className="flex flex-row md:gap-2 text-md md:text-lg flex-wrap p-1 md:p-2">
                    <p>HTML</p>
                    <FaHtml5 className="text-md md:text-xl" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-2 flex-wrap">
                <div className="flex-3 md:self-center align-middle w-[170px] md:p-4 text-xl lg:text-3xl lg:w-[200px] font-bold text-slate-500">
                  <p className="text-green-600 md:text-slate-400">Blockchain</p>
                </div>
                <div className="flex-1 md:border-l flex flex-row gap-1 md:gap-2 flex-wrap md:border-slate-600 p-1 md:p-2 text-slate-400 antialiased tracking-wide">
                  <div className="flex flex-row md:gap-2 text-md md:text-lg flex-wrap p-1 md:p-2 border-r border-slate-800">
                    <p>Solidity</p>
                    <SiSolidity className="text-md md:text-xl" />
                  </div>
                  <div className="flex flex-row md:gap-2 text-md md:text-lg flex-wrap p-1 md:p-2 border-r border-slate-800">
                    <p>Truffle</p>
                  </div>
                  <div className="flex flex-row md:gap-2 text-md md:text-lg flex-wrap p-1 md:p-2 border-r border-slate-800">
                    <p>Brownie</p>
                  </div>
                  <div className="flex flex-row md:gap-2 text-md md:text-lg flex-wrap p-1 md:p-2 border-r border-slate-800">
                    <p>Hardhat</p>
                  </div>
                  <div className="flex flex-row md:gap-2 text-md md:text-lg flex-wrap p-1 md:p-2">
                    <p>Web3</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-2 flex-wrap">
                <div className="flex-3 md:self-center align-middle w-[170px] md:p-4 text-xl lg:text-3xl lg:w-[200px] font-bold text-slate-500">
                  <p className="text-green-600 md:text-slate-400">Tools</p>
                </div>

                <div className="flex-1 md:border-l flex flex-row gap-1 md:gap-2 flex-wrap md:border-slate-600 p-1 md:p-2 text-slate-400 antialiased tracking-wide">
                  <div className="flex flex-row md:gap-2 text-md md:text-lg flex-wrap p-1 md:p-2 border-r border-slate-800">
                    <p>Docker</p>
                    <GrDocker className="text-md md:text-xl" />
                  </div>
                  <div className="flex flex-row md:gap-2 text-md md:text-lg flex-wrap p-1 md:p-2 border-r border-slate-800">
                    <p>Git</p>
                    <AiFillGithub className="text-md md:text-xl" />
                  </div>
                  <div className="flex flex-row md:gap-2 text-md md:text-lg flex-wrap p-1 md:p-2 border-r border-slate-800">
                    <p>Postman</p>
                    <SiPostman className="text-md md:text-xl" />
                  </div>
                  <div className="flex flex-row md:gap-2 text-md md:text-lg flex-wrap p-1 md:p-2">
                    <p>Ganache</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-2 flex-wrap">
                <div className="flex-3 md:self-center align-middle w-[170px] md:p-4 text-xl lg:text-3xl lg:w-[200px] font-bold text-slate-500">
                  <p className="text-green-600 md:text-slate-400">Database</p>
                </div>
                <div className="flex-1 md:border-l flex flex-row gap-1 md:gap-2 flex-wrap md:border-slate-600 p-1 md:p-2 text-slate-400 antialiased tracking-wide">
                  <div className="flex flex-row md:gap-2 text-md md:text-lg flex-wrap p-1 md:p-2 border-r border-slate-800">
                    <p>MongoDb</p>
                    <SiMongodb className="text-md md:text-xl" />
                  </div>
                  <div className="flex flex-row md:gap-2 text-md md:text-lg flex-wrap p-1 md:p-2">
                    <p>PostgreSQL</p>
                    <SiPostgresql className="text-md md:text-xl" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-2 flex-wrap">
                <div className="flex-3 md:self-center align-middle w-[170px] md:p-4 text-xl lg:text-3xl lg:w-[200px] font-bold text-slate-500">
                  <p className="text-green-600 md:text-slate-400">Cloud</p>
                </div>
                <div className="flex-1 md:border-l flex flex-row gap-1 md:gap-2 flex-wrap md:border-slate-600 p-1 md:p-2 text-slate-400 antialiased tracking-wide">
                  <div className="flex flex-row md:gap-2 text-md md:text-lg flex-wrap p-1 md:p-2 border-r border-slate-800">
                    <p>AWS</p>
                    <FaAws className="text-md md:text-xl" />
                  </div>
                  <div className="flex flex-row md:gap-2 text-md md:text-lg flex-wrap p-1 md:p-2">
                    <p>Heroku</p>
                    <SiHeroku className="text-md md:text-xl" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        {/* Certifications / ratings / achievements */}
        <section className="snap-start flex flex-col h-screen flex-wrap gap-2 md:p-8 py-2 md:py-8">
          <section id="experience" className="md:p-2 flex-1">
            <div className="flex flex-row gap-4 my-4">
              <img
                src={experienceImg}
                className="h-16 md:max-h-24"
                alt="education"
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
                    Founder | Full Stack Web3 Developer
                  </h5>

                  <p className="text-slate-300 font-light text-sm">
                    Aug 2021 - present
                  </p>
                </div>
              </a>
            </div>
          </section>
        </section>

        {/* Projects */}
        <section className="snap-start flex flex-col h-screen flex-wrap gap-2 md:p-8 py-2 md:py-8">
          <section id="experience" className="md:p-2 flex-1">
            <div className="flex flex-row gap-4 my-4">
              <img
                src={experienceImg}
                className="h-16 md:max-h-24"
                alt="education"
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
                    Founder | Full Stack Web3 Developer
                  </h5>

                  <p className="text-slate-300 font-light text-sm">
                    Aug 2021 - present
                  </p>
                </div>
              </a>
            </div>
          </section>
        </section>

        {/* Contact me */}
        <section className="snap-start flex flex-col h-screen flex-wrap gap-2 md:p-8 py-2 md:py-8">
          <section id="experience" className="md:p-2 flex-1">
            <div className="flex flex-row gap-4 my-4">
              <img
                src={experienceImg}
                className="h-16 md:max-h-24"
                alt="education"
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
                    Founder | Full Stack Web3 Developer
                  </h5>

                  <p className="text-slate-300 font-light text-sm">
                    Aug 2021 - present
                  </p>
                </div>
              </a>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}

export default Portfolio;
