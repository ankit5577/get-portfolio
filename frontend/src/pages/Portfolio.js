import React from "react";

import Welcome from "../components/Welcome";
import Education from "../components/Education";
import ExperienceCertification from "../components/ExperienceCertification";
import Skills from "../components/Skills";
import AchievementsRatings from "../components/AchievementsRatings";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

import { CgWebsite } from "react-icons/cg";

function Portfolio() {
  return (
    <div
      className={`snap-y snap-mandatory h-screen overflow-y-scroll overflow-x-hidden scroll-smooth
                    bg-slate-900 font-sans text-gray-300 `}
    >
      {/* background */}
      <div className="absolute filter bg-slate-700 p-16 rounded-full blur-sm shadow-xl bg-blend-screen opacity-20"></div>
      <div className="absolute transform -translate-x-12 filter bg-pink-700 p-24 rounded-full blur-sm shadow-xl bg-blend-overlay opacity-10"></div>
      <div className="absolute filter bg-white/3 p-8 rounded-full blur-sm shadow-xl bg-blend-screen"></div>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 right-20 md:h-60 md:w-64 h-36 w-36 text-white/2 filter blur-[2px]"
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

      <CgWebsite className="absolute right-10 text-9xl filter text-slate-800 blur-sm bg-blend-screen" />

      <div
        className=" relative filter backdrop-blur-xl
       bg-slate-500 bg-opacity-10 container max-w-7xl w-full p-4 md:p-8 rounded-xl mx-auto
        border-2 border-slate-800 shadow-2xl"
      >
        {/* welcome */}
        <Welcome />

        {/* education */}
        <Education />

        {/* experience / certification */}
        <ExperienceCertification />

        {/* Skills */}
        <Skills />

        {/* achievements / ratings */}
        <AchievementsRatings />

        {/* Projects */}
        <Projects />

        {/* Contact me */}
        <Contact />
      </div>
    </div>
  );
}

export default Portfolio;
