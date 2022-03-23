import React from "react";
import { AiFillStar } from "react-icons/ai";

import { IoMdDoneAll } from "react-icons/io";
import achievementsImg from "../assets/images/achievements1.svg";
import ratingsImg from "../assets/images/ratings.svg";

function AchievementsRatings() {
  return (
    <section className="snap-start flex flex-col h-screen flex-wrap gap-2 md:p-8 py-2 md:py-8">
      <section id="achievements" className="md:p-2 flex-1">
        <div className="flex flex-row gap-4 my-4">
          <img
            src={achievementsImg}
            className="h-12 md:max-h-24"
            alt="achievements"
          />
          <h3 className="flex self-center align-bottom md:text-5xl text-2xl tracking-wider font-medium">
            Achievements
          </h3>
        </div>

        <div className="relative flex flex-col md:flex-row flex-wrap">
          <div className="flex-3 md:self-center align-middle w-[200px] lg:text-3xl lg:w-[240px] md:p-4 text-xl font-bold text-slate-500">
            <span className="text-slate-400">2021</span>
          </div>
          <div className="relative hidden md:block border-l border-slate-300">
            <span className="absolute -left-[5px] top-0  px-[5px] py-[5px] bg-teal-400 rounded-full"></span>
          </div>
          <div className="flex-1 md:ml-4 p-4 bg-slate-800/3 rounded-lg shadow-md backdrop-blur-md">
            <h4 className="antialiased tracking-wide md:tracking-wider font-medium text-sm sm:text-md md:text-lg">
              <IoMdDoneAll className="inline mr-2 text-green-500 text-xl animate-pulse" />
              36/25000 Global Rank in CodeChef July Long
            </h4>
          </div>
        </div>

        <div className="relative my-4 flex flex-col md:flex-row flex-wrap">
          <div className="flex-3 md:self-center align-middle w-[200px] md:p-4 text-xl lg:text-3xl lg:w-[240px] font-bold text-slate-500">
            <p className="text-slate-400">2020</p>
          </div>
          <div className="relative hidden md:block border-l border-slate-300">
            <span className="absolute -left-[5.5px] -top-[2px] animate animate-pulse px-[5px] py-[5px] bg-teal-400 rounded-full"></span>
          </div>
          <div className="flex-1 md:ml-4 p-4 bg-slate-800/3 rounded-lg shadow-md backdrop-blur-md">
            <h4 className="antialiased tracking-wide md:tracking-wider  font-medium text-sm sm:text-md md:text-lg">
              <IoMdDoneAll className="inline mr-2 text-green-500 text-xl animate-pulse" />
              Lead University Coding team
            </h4>

            <h4 className="antialiased tracking-wide md:tracking-wider  font-medium text-sm sm:text-md md:text-lg">
              <IoMdDoneAll className="inline mr-2 text-green-500 text-xl animate-pulse" />
              Worked on various projects for University
            </h4>
          </div>
        </div>

        <div className="relative flex flex-col md:flex-row flex-wrap">
          <div className="flex-3 md:self-center align-middle w-[200px] md:p-4 text-xl lg:text-3xl lg:w-[240px] font-bold text-slate-500">
            <p className="text-slate-400">2019</p>
          </div>
          <div className="relative hidden md:block border-l border-slate-300">
            <span className="absolute -left-[5.5px] -top-[2px] animate animate-pulse px-[5px] py-[5px] bg-teal-400 rounded-full"></span>
          </div>
          <div className="flex-1 md:ml-4 p-4 bg-slate-800/3 rounded-lg shadow-md backdrop-blur-md">
            <h4 className="antialiased tracking-wide md:tracking-wider  font-medium text-sm sm:text-md md:text-lg">
              <IoMdDoneAll className="inline mr-2 text-green-500 text-xl animate-pulse" />
              represented Unversity in CAB meetings
            </h4>
          </div>
        </div>
      </section>

      <section id="achievements" className="md:p-2 flex-1">
        <div className="flex flex-row gap-4 my-4">
          <img src={ratingsImg} className="h-12 md:max-h-24" alt="ratings" />
          <h3 className="flex self-center align-bottom md:text-5xl text-2xl tracking-wider font-medium">
            Ratings
          </h3>
        </div>

        <div className="relative flex flex-col md:flex-row flex-wrap">
          <div className="flex-3 md:self-center align-middle w-[200px] lg:text-2xl lg:w-[240px] md:p-4 text-xl font-bold text-slate-500">
            <span className="text-slate-400">CodeChef</span>
          </div>
          <div className="relative hidden md:block border-l border-slate-300">
            <span className="absolute -left-[5px] top-0  px-[5px] py-[5px] bg-teal-400 rounded-full"></span>
          </div>
          <div className="flex-1 md:ml-4 p-4 bg-slate-800/3 rounded-lg shadow-md backdrop-blur-md">
            <h4 className="antialiased tracking-wide md:tracking-wider font-medium text-sm sm:text-md md:text-lg">
              <AiFillStar className="inline  text-green-500 text-lg md:text-xl animate-pulse" />
              <AiFillStar className="inline  text-green-500 text-lg md:text-xl animate-pulse" />
              <AiFillStar className="inline  text-green-500 text-lg md:text-xl animate-pulse" />
              <AiFillStar className="inline mr-2 text-green-500 text-lg md:text-xl animate-pulse" />
              Ratings 1903
            </h4>
          </div>
        </div>

        <div className="relative my-4 flex flex-col md:flex-row flex-wrap">
          <div className="flex-3 md:self-center align-middle w-[200px] md:p-4 text-xl lg:text-2xl lg:w-[240px] font-bold text-slate-500">
            <p className="text-slate-400">HackerRank</p>
          </div>
          <div className="relative hidden md:block border-l border-slate-300">
            <span className="absolute -left-[5.5px] -top-[2px] animate animate-pulse px-[5px] py-[5px] bg-teal-400 rounded-full"></span>
          </div>
          <div className="flex-1 md:ml-4 p-4 bg-slate-800/3 rounded-lg shadow-md backdrop-blur-md">
            <h4 className="antialiased tracking-wide md:tracking-wider  font-medium text-sm sm:text-md md:text-lg">
              <AiFillStar className="inline  text-green-500 text-lg md:text-xl animate-pulse" />
              <AiFillStar className="inline  text-green-500 text-lg md:text-xl animate-pulse" />
              <AiFillStar className="inline  text-green-500 text-lg md:text-xl animate-pulse" />
              <AiFillStar className="inline  text-green-500 text-lg md:text-xl animate-pulse" />
              <AiFillStar className="inline mr-2 text-green-500 text-lg md:text-xl animate-pulse" />
              Python
            </h4>
          </div>
        </div>
      </section>
    </section>
  );
}

export default AchievementsRatings;
