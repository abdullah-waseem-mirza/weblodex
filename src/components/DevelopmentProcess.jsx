"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Rocket,
  PenTool,
  Code,
  ShieldCheck,
  RefreshCcw,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    title: "Discovery & Planning",
    description:
      "We dive deep to understand your business goals, target audience, and project requirements to craft a winning strategy.",
    icon: <Rocket className="h-10 w-10 text-pink-300" />,
  },
  {
    title: "UI/UX Designing",
    description:
      "Our design experts create stunning, user-friendly interfaces that offer seamless digital experiences.",
    icon: <PenTool className="h-10 w-10 text-pink-300" />,
  },
  {
    title: "Development",
    description:
      "Our developers turn designs into high-performing, scalable websites and apps using modern technologies.",
    icon: <Code className="h-10 w-10 text-pink-300" />,
  },
  {
    title: "Testing & QA",
    description:
      "We rigorously test everything to ensure bug-free, secure, and flawless performance across all devices.",
    icon: <ShieldCheck className="h-10 w-10 text-pink-300" />,
  },
  {
    title: "Launch & Support",
    description:
      "After a successful launch, we offer ongoing support, updates, and optimizations for continued success.",
    icon: <RefreshCcw className="h-10 w-10 text-pink-300" />,
  },
];

export default function DevelopmentProcess() {
  const textRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      cardsRef.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        delay: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section
      className="overflow-hidden relative bg-gradient-to-b from-violet-600 to-indigo-800 px-4 sm:px-8 md:px-16 xl:px-24 py-20 text-white font-sans"
    >
      <div className="text-center mb-12 max-w-4xl mx-auto" ref={textRef}>
        <button className="px-5 py-2 rounded-full bg-white/10 text-white font-medium tracking-wide backdrop-blur hover:bg-white/20 transition-all text-sm sm:text-base">
          Our Development Process
        </button>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-lg mt-6">
          How We Bring Your Vision to Life ✨
        </h2>

        <p className="text-base sm:text-lg leading-relaxed text-gray-200 mt-4 max-w-3xl mx-auto">
          Our proven development process ensures successful project delivery, tailored to your goals and user needs.
        </p>
      </div>

      <div
        ref={cardsRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 xl:gap-10 mt-12"
      >
        {processSteps.map((step, index) => (
          <div
            key={index}
            className="bg-white/10 rounded-2xl backdrop-blur-md p-6 sm:p-8 text-center hover:scale-[1.03] transform transition-all duration-300 shadow-xl flex flex-col items-center h-full"
          >
            <div className="mb-6">{step.icon}</div>
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
