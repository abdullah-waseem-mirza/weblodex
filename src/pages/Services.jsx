import React from 'react'
import { Link } from 'react-router-dom'
import { FaCode, FaCogs, FaWordpress, FaPaintBrush, FaSearch, FaTools, FaMagic } from 'react-icons/fa'

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-800 via-violet-700 to-violet-600 z-0" />
        <div className="absolute inset-0 bg-black/20 z-[1]" />
        <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center relative z-10 text-center">
          <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 text-transparent bg-gradient-to-r from-violet-200 via-violet-300 to-pink-300 bg-clip-text drop-shadow-xl">
            Our Services
          </h1>
          <p className="text-md sm:text-xl md:text-[22px] text-white drop-shadow-lg font-sans max-w-2xl">
          Crafted with purpose, designed for impact.
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
      <div className="w-full py-4 bg-indigo-800 px-4">
        <div className="flex items-center text-xs sm:text-sm max-w-screen-xl mx-auto">
          <Link to="/" className="text-gray-300 hover:text-white">
            HOME
          </Link>
          <span className="mx-2 text-gray-400">›</span>
          <span className="text-white font-semibold">OUR SERVICES</span>
        </div>
      </div>

      {/* Services Content */}
      <div className="w-full bg-gradient-to-b from-indigo-800 to-purple-700 text-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 space-y-8 sm:space-y-12 md:space-y-16">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white-100">What We Offer</h2>
            <p className="text-gray-200 max-w-3xl mx-auto text-sm sm:text-base md:text-lg">
              At <span className="font-semibold text-white">Weblodex</span>, we bring your ideas to life with services that drive results, build trust, and elevate your brand.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
            {[
              {
                icon: <FaCode className="text-3xl text-[#F9A8D4] mb-4" />,
                title: 'Custom Web Development',
                desc: 'Scalable and elegant websites built with the latest tech stack including React, GSAP, and Tailwind CSS.',
              },
              {
                icon: <FaMagic className="text-3xl text-[#F9A8D4] mb-4" />,
                title: 'Web Animations',
                desc: 'Breathe life into your site with smooth, engaging animations using GSAP and Lottie for a unique user experience.',
              },
              {
                icon: <FaWordpress className="text-3xl text-[#F9A8D4] mb-4" />,
                title: 'WordPress & CMS',
                desc: 'User-friendly, easily manageable websites with WordPress and other CMS platforms tailored to your content needs.',
              },
              {
                icon: <FaPaintBrush className="text-3xl text-[#F9A8D4] mb-4" />,
                title: 'UI/UX Design',
                desc: 'Clean and intuitive designs that ensure a delightful user experience and stronger brand connection.',
              },
              {
                icon: <FaSearch className="text-3xl text-[#F9A8D4] mb-4" />,
                title: 'SEO Optimization',
                desc: 'Increase your search visibility and attract qualified traffic with proven SEO strategies.',
              },
              {
                icon: <FaTools className="text-3xl text-[#F9A8D4] mb-4" />,
                title: 'Website Maintenance',
                desc: 'Ongoing support, performance tuning, and troubleshooting to keep your digital presence smooth and secure.',
              },
            ].map((service, i) => (
              <div key={i} className="bg-white/5 rounded-2xl p-4 sm:p-6 shadow-lg border border-white/10 hover:scale-105 transition-all">
                <div className="flex flex-col items-start">
                  {service.icon}
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white-200 mb-2">{service.title}</h3>
                  <p className="text-gray-200 text-xs sm:text-sm md:text-base">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12 md:mt-16">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h3>
            <Link
              to="/contact"
              className="inline-block bg-indigo-500 text-white hover:bg-indigo-600 hover:scale-105 px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-md transition-all duration-300"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}





























