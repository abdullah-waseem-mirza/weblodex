"use client";

import React, { useState } from "react";
import img from "../components/images/inside1.PNG";
import img1 from "../components/images/project2.PNG";
import img2 from "../components/images/project3.PNG";
import { Link } from "react-router-dom";

const techColors = {
  Wordpress: "bg-blue-600",
  PHP: "bg-purple-700",
  Laravel: "bg-red-600",
  SEO: "bg-yellow-500 text-black",
  HTML5: "bg-orange-600",
  CSS3: "bg-blue-500",
  JS: "bg-yellow-400 text-black",
  React: "bg-sky-500",
  Tailwind: "bg-teal-500",
  GSAP: "bg-green-600",
  Redux: "bg-purple-600",
};

const projects = [
  {
    id: 1,
    image: img,
    title: "Health E-Commerce Site",
    client: "Dr Waseem",
    role: "Doctor",
    website: "https://mrhealth.info",
    shortDescription: `A responsive e-commerce platform for medical products and services.`,
    longDescription: `A fully responsive and user-friendly e-commerce website designed specifically for medical services and products. This platform offers seamless navigation, secure payment integration, and tailored features to help healthcare professionals connect with their clients efficiently. The site includes advanced search functionality, appointment booking, and patient education resources, ensuring a comprehensive digital healthcare experience.`,
    techStack: ["Wordpress","PHP", "Laravel", "SEO"],
  },
  {
    id: 2,
    image: img1,
    title: "UK Tech Blog",
    client: "Abu Razzaq",
    role: "Tech Blogger",
    website: "https://cp50.io",
    shortDescription: `A modern blog platform with dynamic filters and SEO.`,
    longDescription: `A modern tech blogging platform that offers dynamic category filters, smooth animations, and SEO optimization to ensure high visibility on search engines. This website is designed for technology enthusiasts to easily browse through articles, tutorials, and reviews. The platform features an intuitive CMS integration, fast loading times, and interactive UI elements that enhance reader engagement.`,
    techStack: ["HTML5", "CSS3", "SEO","JS", "PHP", "Laravel"],
  },
  {
    id: 3,
    image: img2,
    title: "Crypto Presale Website",
    client: "Faran",
    role: "Crypto Expert",
    website: "https://techtohub.co.uk",
    shortDescription: `A sleek crypto presale site with wallet integration.`,
    longDescription: `A sleek, secure, and modern cryptocurrency presale website that supports wallet integration and real-time data updates. The platform provides users with detailed project information, presale timelines, and secure transaction handling. It also features smooth 3D graphics using Three.js to create an engaging and futuristic experience that builds trust and credibility among crypto investors.`,
    techStack: ["React", "Tailwind", "GSAP", "Redux", "SEO"],
  },
];

export default function Project() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const handleBackClick = () => {
    setSelectedProject(null);
  };

  return (
    <>
      {/* Header Section */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-800 via-violet-700 to-violet-600 z-0" />
        <div className="absolute inset-0 bg-black/20 z-[1]" />
        <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-transparent bg-gradient-to-r from-violet-200 via-violet-300 to-pink-300 bg-clip-text drop-shadow-xl pb-[10px] m-0 text-center">
            {selectedProject ? selectedProject.title : "Our Projects"}
          </h1>
          {!selectedProject && (
            <p className="text-md md:text-[22px] text-white drop-shadow-lg font-sans max-w-2xl text-center m-0 p-0">
              From concept to code — explore the projects that speak for our expertise.
            </p>
          )}
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80" fill="#FFD700">
            <path
              d="M0,64L80,58.7C160,53,320,43,480,42.7C640,43,800,53,960,58.7C1120,64,1280,64,1360,64L1440,64L1440,80L1360,80C1280,80,1120,80,960,80C800,80,640,80,480,80C320,80,160,80,80,80L0,80Z"
              className="fill-purple-500"
            />
          </svg>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="w-full py-4 bg-indigo-800 px-4">
        <div className="flex items-center text-sm max-w-screen-xl mx-auto">
          <Link to="/" className="text-gray-200 hover:text-white">
            HOME
          </Link>
          <span className="mx-2 text-gray-300">›</span>
          <span className="text-white font-semibold">OUR PROJECTS</span>
        </div>
      </div>

      {/* Projects Section */}
      <div className="min-h-screen bg-gradient-to-b from-indigo-800 to-violet-600 py-16 px-6 flex items-center justify-center">
        {!selectedProject ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 container mx-auto">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => handleCardClick(project)}
                className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:scale-105 transform transition-all duration-500 cursor-pointer hover:rotate-1"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-xl w-full h-48 object-cover mb-4"
                />
                <h2 className="text-white text-2xl font-semibold mb-2">{project.title}</h2>
                <p className="text-indigo-100 text-sm">{project.shortDescription}</p>
                <Link
                  to="/testimonials"
                  className="mt-4 inline-block text-indigo-300 hover:underline text-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  Read Client Testimonials →
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row items-center gap-12 container mx-auto">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl text-white font-bold mb-4">{selectedProject.title}</h1>
              <p className="text-indigo-100 mb-8">{selectedProject.longDescription}</p>

              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech, idx) => {
                    const colorClass = techColors[tech] || "bg-gray-600";
                    return (
                      <span
                        key={idx}
                        className={`${colorClass} px-3 py-1 rounded-full text-sm font-semibold`}
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={selectedProject.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-violet-500 hover:bg-violet-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300"
                >
                  See Website
                </a>
                <Link
                  to="/testimonials"
                  className="bg-indigo-500 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300 flex items-center justify-center"
                >
                  Client Testimonials
                </Link>
                <button
                  onClick={handleBackClick}
                  className="bg-indigo-500 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300"
                >
                  Back
                </button>
              </div>
            </div>

            <div className="flex-1">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="rounded-2xl shadow-2xl w-full object-contain"
              />
            </div>
          </div>
        )}
      </div>

      {/* Call To Action Section */}
      <section className="py-16 bg-indigo-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Want a website like this, or need something even more amazing for your business?
          </h2>
          <p className="text-gray-300 mb-8">We are just a Click Away!</p>
          <Link
            to="/contact"
            className="inline-block bg-indigo-500 text-white hover:bg-indigo-600 hover:scale-105 px-6 py-3 rounded-md transition-all duration-300"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </>
  );
}
