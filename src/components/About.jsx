import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img from './images/liveCollaboration.png';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;

    // Slide in
    gsap.fromTo(
      el,
      { x: -1000, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Text fade in
    gsap.fromTo(
      textRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 90%',
        },
      }
    );

    // Float animation
    const floatAnim = gsap.to(imageRef.current, {
      y: 30,
      x: 20,
      rotationZ: 2,
      duration: 1.8,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
    });

    // Tilt effect
    const imgEl = imageRef.current;
    const tilt = (e) => {
      const rect = imgEl.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const deltaX = x - centerX;
      const deltaY = y - centerY;

      const rotateX = -(deltaY / centerY) * 15;
      const rotateY = (deltaX / centerX) * 15;

      imgEl.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.08)`;
    };

    const resetTilt = () => {
      imgEl.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
    };

    imgEl.addEventListener('mousemove', tilt);
    imgEl.addEventListener('mouseleave', resetTilt);

    return () => {
      floatAnim.kill();
      imgEl.removeEventListener('mousemove', tilt);
      imgEl.removeEventListener('mouseleave', resetTilt);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden relative bg-gradient-to-b from-indigo-800 to-violet-600 px-4 sm:px-6 md:px-20 py-20 text-white font-sans"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 sm:gap-12">
        {/* Text */}
        <div
          ref={textRef}
          className="md:w-1/2 text-center md:text-left space-y-6"
        >
          <button className="px-4 sm:px-5 py-2 rounded-full bg-white/10 text-white text-sm sm:text-base font-medium tracking-wide backdrop-blur hover:bg-white/20 transition-all">
            About Us
          </button>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white drop-shadow-lg leading-tight">
            We're Building the <span className="text-pink-300">Future Together</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-gray-200">
            At <span className="font-semibold text-white">Weblodex</span>, we craft cutting-edge digital experiences tailored for the modern world.
            We're not just another software house — we're your technology partners. Whether it's a dynamic website, a full-stack web app,
            or a custom software solution, we bring your vision to life with clean code, creative design, and powerful functionality.
          </p>

          <button className="mt-6 px-5 sm:px-6 py-3 bg-white text-indigo-700 font-semibold rounded-2xl shadow-md hover:bg-indigo-100 transition-all duration-300">
            Read More
          </button>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center relative z-10">
          <img
            src={img}
            ref={imageRef}
            alt="Weblodex Team"
            className="rounded-3xl w-full max-w-[350px] transition-transform duration-300"
            style={{
              transformStyle: 'preserve-3d',
              transform: 'rotateX(0deg) rotateY(0deg)',
              backgroundColor: 'transparent',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
