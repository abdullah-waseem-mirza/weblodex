import React, { useState } from "react";
import img from "../components/images/inside1.PNG";
import img1 from "../components/images/project2.PNG";
import img2 from "../components/images/project3.PNG";
import { Link } from "react-router-dom";


const projects = [
  {
    id: 1,
    image: img,
    title: "Project One",
    shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    longDescription:
      "This is a long description for Project One. It covers all features, design philosophy, and use cases in great detail. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Vivamus at arcu eget sapien tincidunt.",
    websiteLink: "https://example.com/project-one",
  },
  {
    id: 2,
    image: img1,
    title: "Project Two",
    shortDescription: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    longDescription:
      "This is a long description for Project Two. It talks about project goals, tech stack, challenges, and future improvements. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    websiteLink: "https://example.com/project-two",
  },
  {
    id: 3,
    image: img2,
    title: "Project Three",
    shortDescription: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    longDescription:
      "This is a long description for Project Three. Focused on scalability, performance and modern design principles. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    websiteLink: "https://example.com/project-three",
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
      <section className="relative w-full h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-800 via-violet-700 to-violet-600 z-0" />
        <div className="absolute inset-0 bg-black/20 z-[1]" />
        <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-transparent bg-gradient-to-r from-violet-200 via-violet-300 to-pink-300 bg-clip-text drop-shadow-xl pb-[10px] m-0 text-center">
            Our Projects
          </h1>
          {/* text-5xl md:text-7xl font-extrabold mb-4 text-transparent bg-gradient-to-r from-violet-200 via-violet-300 to-pink-300 bg-clip-text drop-shadow-xl */}
          <p className="text-md md:text-[22px] text-white drop-shadow-lg font-sans max-w-2xl text-center m-0 p-0">
          From concept to code — explore the projects that speak for our expertise.          </p>
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


      <div className="min-h-screen bg-gradient-to-b from-indigo-800 to-violet-600 py-16 px-6 flex items-center justify-center">
         {/* Breadcrumb */}
       
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
              </div>
            ))}
          </div>
        ) : (

          <div className="flex flex-col lg:flex-row items-center gap-12 container mx-auto">

            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl text-white font-bold mb-4">{selectedProject.title}</h1>
              <p className="text-indigo-100 mb-8">{selectedProject.longDescription}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={selectedProject.websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-violet-500 hover:bg-violet-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300"
                >
                  See Website
                </a>
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
                className="rounded-2xl shadow-2xl w-full  object-contain"
              />
            </div>
          </div>
        )}
      </div>
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