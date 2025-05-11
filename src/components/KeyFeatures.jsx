"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  CheckCircle,
  Zap,
  Layers,
  Shield,
  Code,
  Settings,
  Calendar,
  MessageSquare,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    title: "Focus on Quality",
    description:
      "We prioritize delivering high-quality solutions that exceed client expectations.",
    icon: <CheckCircle className="h-10 w-10 text-pink-300" />,
  },
  {
    title: "Agile and Scrum",
    description:
      "Following agile methodologies to ensure flexible and efficient project delivery.",
    icon: <Zap className="h-10 w-10 text-pink-300" />,
  },
  {
    title: "Full-Stack Capabilities",
    description:
      "Comprehensive development expertise across frontend and backend technologies.",
    icon: <Layers className="h-10 w-10 text-pink-300" />,
  },
  {
    title: "Quality Assured",
    description:
      "Rigorous testing and quality assurance processes for flawless performance.",
    icon: <Shield className="h-10 w-10 text-pink-300" />,
  },
  {
    title: "High-Quality Code",
    description:
      "Clean, maintainable, and optimized code following best practices.",
    icon: <Code className="h-10 w-10 text-pink-300" />,
  },
  {
    title: "Flexibility Maintenance",
    description:
      "Adaptable solutions with ongoing support and maintenance services.",
    icon: <Settings className="h-10 w-10 text-pink-300" />,
  },
  {
    title: "Meet Deadlines",
    description:
      "Consistent on-time delivery without compromising quality standards.",
    icon: <Calendar className="h-10 w-10 text-pink-300" />,
  },
  {
    title: "Trustful Communication",
    description:
      "Transparent and effective communication throughout the project lifecycle.",
    icon: <MessageSquare className="h-10 w-10 text-pink-300" />,
  },
  {
    title: "Fully Optimized End-Product",
    description:
      "Performance-optimized solutions for the best user experience.",
    icon: <Zap className="h-10 w-10 text-pink-300" />,
  },
];

export default function KeyFeatures() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

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
        delay: 0.3,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 90%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden relative bg-gradient-to-b from-violet-600 to-indigo-800 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 pb-20 pt-16 text-white font-sans"
    >
      <div className="text-center mb-12" ref={textRef}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
          Key Features
        </h2>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-200 mt-4 max-w-3xl mx-auto px-2">
          Get started with <span className="font-semibold">Weblodex</span> to grow reach, boost traffic, and connect better.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
        {processSteps.map((step, index) => (
          <div
            key={index}
            className="bg-white/10 rounded-2xl backdrop-blur-md p-6 sm:p-8 text-center hover:scale-105 transform transition-transform duration-300 shadow-xl flex flex-col items-center"
          >
            <div className="mb-4 sm:mb-6">{step.icon}</div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
              {step.title}
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
