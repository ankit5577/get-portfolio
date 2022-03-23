import React from 'react'
import BlockRevealAnimation from 'react-block-reveal-animation/dist/BlockRevealAnimation';
import { AiOutlineArrowDown } from 'react-icons/ai';
import developerImg from "../assets/images/developer.svg";


function Welcome() {
  return (
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
  )
}

export default Welcome