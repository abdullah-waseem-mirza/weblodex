import React from 'react'
import { Link } from 'react-router-dom'
import Team from '../components/Team.jsx'

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-800 via-violet-700 to-violet-600 z-0" />
        <div className="absolute inset-0 bg-black/20 z-[1]" />
        <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center relative z-10 text-center">
          <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 text-transparent bg-gradient-to-r from-violet-200 via-violet-300 to-pink-300 bg-clip-text drop-shadow-xl animate-fadeIn">
            Our Team
          </h1>
          <p className="text-md sm:text-xl md:text-[22px] text-white drop-shadow-lg font-sans max-w-2xl animate-slideUp">
            From concept to code — explore the projects that speak for our expertise.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80" fill="#FFD700">
            <path
              d="M0,64L80,58.7C160,53,320,43,480,42.7C640,43,800,53,960,58.7C1120,64,1280,64,1360,64L1440,64L1440,80L1360,80C1280,80,1120,80,960,80C800,80,640,80,480,80C320,80,160,80,80,80L0,80Z"
              className="fill-purple-500"
            ></path>
          </svg>
        </div>
      </section>

      {/* Full-width Breadcrumb */}
      <div className="w-full py-4 bg-indigo-800 px-4">
        <div className="flex items-center text-sm max-w-screen-xl mx-auto">
          <Link to="/" className="text-gray-300 hover:text-white transition-all duration-300">
            HOME
          </Link>
          <span className="mx-2 text-gray-400">›</span>
          <span className="text-white font-semibold">OUR TEAM</span>
        </div>
      </div>

      {/* Team Section */}
      <Team />

      {/* CTA Section */}
      <section className="py-16 bg-indigo-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white animate-fadeIn">
            Have an Idea in Mind or Looking to Revamp Your Existing Website?
          </h2>
          <p className="text-gray-300 mb-8 animate-slideUp">We are just a Click Away!</p>
          <Link
            to="/contact"
            className="inline-block bg-indigo-500 text-white hover:bg-indigo-600 hover:scale-105 px-6 py-3 rounded-md transition-all duration-300"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  )
}
