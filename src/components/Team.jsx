"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img from "./images/ahmed.png";
import img2 from "./images/abdullah.png";
import img3 from "./images/chNuman.png";
import img4 from "./images/abubaker.png";
import img5 from "./images/roshan.png";

gsap.registerPlugin(ScrollTrigger);

export default function Team() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef(null);
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const teamMembers = [
    {
      id: 1,
      name: "Ahmed Nadeem",
      position: "CEO & Founder",
      image: img,
      description: "Leading the company with a vision for innovation and growth.",
      skills: ["Leadership", "Strategy", "Business Development"],
      skillColors: ["bg-red-500", "bg-yellow-500", "bg-blue-500"]
    },
    {
      id: 2,
      name: "Abdullah Waseem Mirza",
      position: "React and WordPress Developer",
      image: img2,
      description: "Specializing in building dynamic web apps with React and WordPress.",
      skills: ["React", "Next", "WordPress", "GSAP"],
      skillColors: ["bg-blue-500", "bg-purple-500", "bg-gray-500", "bg-green-500"]
    },
    {
        id: 3,
        name: "Ch Numan Kamboh",
        position: "Frontend Engineer",
        image: img3,
        description: "Crafting intuitive and visually stunning user interfaces.",
        skills: ["React", "Tailwindcss", "Next", "UI/UX Design"],
        skillColors: ["bg-blue-500", "bg-teal-500", "bg-purple-500", "bg-red-500"]
      }
    ,  
    {
      id: 4,
      name: "Abu Baker",
      position: "QA Engineer",
      image: img4,
      description: "Ensuring the highest quality standards with thorough testing.",
      skills: ["Manual Testing", "Automation", "Bug Tracking"],
      skillColors: ["bg-teal-500", "bg-blue-500", "bg-gray-500"]
    },
    {
      id: 5,
      name: "Roshan",
      position: "Backend Developer",
      image: img5,
      description: "Building scalable backend systems with Node.js, Express, and MongoDB.",
      skills: ["Node.js", "Express", "MongoDB", "API Development", "RESTful Services"],
      skillColors: ["bg-green-500", "bg-yellow-500", "bg-blue-500", "bg-teal-500", "bg-purple-500"]
    }
  ];

  const getVisibleSlides = () => {
    if (typeof window === "undefined") return 1;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 640) return 2;
    return 1;
  };

  const [visibleSlides, setVisibleSlides] = useState(getVisibleSlides());

  useEffect(() => {
    const handleResize = () => setVisibleSlides(getVisibleSlides());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) =>
          (prev + 1) % (teamMembers.length - visibleSlides + 1)
        );
      }, 5000);
    }
    return () => clearInterval(autoPlayRef.current);
  }, [isAutoPlaying, visibleSlides, teamMembers.length]);

  useEffect(() => {
    const el = sectionRef.current;
    gsap.fromTo(
      el,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      textRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 90%",
        },
      }
    );
  }, []);

  const nextSlide = () => {
    if (currentIndex < teamMembers.length - visibleSlides) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      setCurrentIndex(teamMembers.length - visibleSlides);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden relative bg-gradient-to-b from-indigo-800 to-violet-600 px-4 sm:px-8 md:px-20 py-20 text-white font-sans"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="text-center mb-12" ref={textRef}>
        <button className="px-5 py-2 rounded-full bg-white/10 text-white font-medium tracking-wide backdrop-blur hover:bg-white/20 transition-all">
          Our Team
        </button>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-lg mt-6">
          Meet the Minds Behind Our Success 🚀
        </h2>

        <p className="text-base sm:text-lg leading-relaxed text-gray-200 mt-4 max-w-3xl mx-auto">
          A passionate team bringing innovative solutions, technical excellence, and human-centered designs to every project we touch.
        </p>
      </div>

      <div className="relative">
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              width: `${(teamMembers.length / visibleSlides) * 100}%`,
              transform: `translateX(-${(currentIndex * 100) / teamMembers.length}%)`,
            }}
          >
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="p-2 sm:p-4"
                style={{
                  width: `${100 / teamMembers.length}%`,
                  flexShrink: 0,
                }}
              >
                <TeamCard member={member} />
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <div className="flex justify-center mt-10 gap-4">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}

function TeamCard({ member }) {
  return (
    <div className="bg-gray-50 rounded-2xl p-6 text-center hover:scale-105 transform transition-all duration-300 shadow-xl h-full flex flex-col items-center justify-start">
      <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-indigo-500">
        <img
          src={member.image}
          alt={`${member.name}, ${member.position}`}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-gray-800">{member.name}</h3>
      <p className="text-indigo-500 font-medium mb-2">{member.position}</p>
      <p className="text-gray-600 text-xs sm:text-sm mb-4">{member.description}</p>
      <div className="flex flex-wrap justify-center gap-2 mt-auto">
        {member.skills.map((skill, idx) => (
          <span
            key={idx}
            className={`px-3 py-1 ${member.skillColors[idx]} text-white text-xs font-medium rounded-full`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
