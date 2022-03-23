import React from 'react'
import skillsImg from "../assets/images/skills.svg";

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

function Skills() {
  return (
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
                <div className="flex-1 md:border-l flex flex-row gap-1 md:gap-2 flex-wrap md:border-green-600 p-1 md:p-2 text-slate-400 antialiased tracking-wide">
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
                <div className="flex-1 md:border-l flex flex-row gap-1 md:gap-2 flex-wrap md:border-green-600 p-1 md:p-2 text-slate-400 antialiased tracking-wide">
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
                <div className="flex-1 md:border-l flex flex-row gap-1 md:gap-2 flex-wrap md:border-green-600 p-1 md:p-2 text-slate-400 antialiased tracking-wide">
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

                <div className="flex-1 md:border-l flex flex-row gap-1 md:gap-2 flex-wrap md:border-green-600 p-1 md:p-2 text-slate-400 antialiased tracking-wide">
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
                <div className="flex-1 md:border-l flex flex-row gap-1 md:gap-2 flex-wrap md:border-green-600 p-1 md:p-2 text-slate-400 antialiased tracking-wide">
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
                <div className="flex-1 md:border-l flex flex-row gap-1 md:gap-2 flex-wrap md:border-green-600 p-1 md:p-2 text-slate-400 antialiased tracking-wide">
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
  )
}

export default Skills