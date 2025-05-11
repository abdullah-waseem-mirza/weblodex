import React from 'react'
import { Link } from 'react-router-dom'
import KeyFeatures from '../components/KeyFeatures'
import img from '../components/images/aboutImage.png';


export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-800 via-violet-700 to-violet-600 z-0" />
        <div className="absolute inset-0 bg-black/20 z-[1]" />
        <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center relative z-10 text-center">
          <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 text-transparent bg-gradient-to-r from-violet-200 via-violet-300 to-pink-300 bg-clip-text drop-shadow-xl">
            About Weblodex
          </h1>
          <p className="text-md sm:text-xl md:text-[22px] text-white drop-shadow-lg font-sans max-w-2xl">
            Crafting digital excellence, delivering measurable results
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

      {/* Gradient Background from Breadcrumb to About */}
      <div className="w-full bg-gradient-to-b from-indigo-800 to-violet-600 text-white">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center text-sm">
            <Link to="/" className="text-gray-200 hover:text-white">
              HOME
            </Link>
            <span className="mx-2 text-gray-300">›</span>
            <span className="text-white font-semibold">ABOUT US</span>
          </div>
        </div>

        {/* About Content */}
        <section className="container mx-auto px-4 py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="relative group">
              <img
                src={img}
                alt="Office workspace"
                className="rounded-2xl shadow-2xl w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
              />
              {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-gradient-to-r from-indigo-800/50 to-violet-600/50 rounded-full p-4 shadow-lg cursor-pointer hover:from-indigo-700/50 hover:to-violet-500/50 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-violet-100"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div> */}
            </div>
            <div className="space-y-6 md:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-violet-200 to-violet-100 text-transparent bg-clip-text">
                About us
              </h2>
              <div className="space-y-4 md:space-y-6">
                <p className="text-gray-100 text-base sm:text-lg leading-relaxed">
                  At Weblodex, we specialize in delivering a comprehensive range of web services designed to take your digital presence to the next level. From stunning front-end development to robust back-end solutions, we create websites that not only function seamlessly but also attract your dream clients.
                </p>
                <p className="text-gray-100 text-base sm:text-lg leading-relaxed">
                  Additionally, we provide strong SEO strategies to enhance your online visibility, driving targeted traffic and boosting your search engine rankings. Our goal is to build websites that not only look great and perform well but also reach and convert the right audience.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center bg-gradient-to-r from-indigo-800 to-violet-600 hover:from-indigo-700 hover:to-violet-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full transform hover:scale-105 transition-all shadow-lg"
              >
                Contact us
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </div> {/* End Gradient */}

      {/* Key Features */}
      <KeyFeatures />

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-indigo-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
            Have an Idea in Mind or Looking to Revamp Your Existing Website?
          </h2>
          <p className="text-gray-300 mb-6 sm:mb-8">We are just a Click Away!</p>
          <Link
            to="/contact"
            className="inline-block bg-indigo-500 text-white hover:bg-indigo-600 hover:scale-105 px-4 sm:px-6 py-2 sm:py-3 rounded-md transition-all duration-300"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  )
}
