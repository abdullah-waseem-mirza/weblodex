import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import placeholderImg from './images/techCompany.png';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const WhoWeAre = () => {
  const sectionRef = useRef(null);
  const animatedContainerRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const container = animatedContainerRef.current;

    // Container slide-in animation
    gsap.fromTo(
      container,
      { x: 1000, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Text animation
    gsap.fromTo(
      textRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 90%',
        },
      }
    );

    // Floating animation
    const floatAnim = gsap.to(imageRef.current, {
      y: 30,
      x: 20,
      rotationZ: 2,
      duration: 1.8,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
    });

    // 3D Tilt effect
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
      className="overflow-hidden relative bg-gradient-to-b from-violet-600 to-indigo-800 px-6 md:px-20 py-20 text-white font-sans"
    >
      <div
        ref={animatedContainerRef}
        className="flex flex-col md:flex-row-reverse items-center justify-between w-full gap-12"
      >
        {/* Text Content */}
        <div
          ref={textRef}
          className="md:w-1/2 mb-10 md:mb-0 md:pl-12 text-center md:text-left relative z-10 space-y-6"
        >
          <button className="px-5 py-2 rounded-full bg-white/10 text-white font-medium tracking-wide backdrop-blur hover:bg-white/20 transition-all">
            Who We Are
          </button>

          <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg leading-tight">
            A Team of <span className="text-pink-300">Passionate Innovators</span>
          </h2>

          <p className="text-lg leading-relaxed text-gray-200">
            At <span className="font-semibold text-white">Weblodex</span>, we craft cutting-edge digital experiences tailored for the modern world. We're not just another software house — we're your technology partners. Whether it's a dynamic website, a full-stack web app, or a custom software solution, we bring your vision to life with clean code, creative design, and powerful functionality.
          </p>

          <button className="mt-6 px-6 py-3 bg-white text-indigo-700 font-semibold rounded-2xl shadow-md hover:bg-indigo-100 transition-all duration-300">
            Read More
          </button>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center relative z-10">
          <img
            src={placeholderImg}
            ref={imageRef}
            alt="Weblodex Team"
            className="rounded-3xl w-[90%] max-w-md transition-transform duration-300"
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

export default WhoWeAre;





// second one

// import { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import placeholderImg from './images/techCompany.png'; // Import the image correctly

// // Register GSAP plugin
// gsap.registerPlugin(ScrollTrigger);

// const WhoWeAre = () => {
//   const sectionRef = useRef(null);
//   const animatedContainerRef = useRef(null);
//   const imageRef = useRef(null);
//   const textRef = useRef(null);

//   useEffect(() => {
//     const container = animatedContainerRef.current;

//     // Container slide-in animation
//     gsap.fromTo(
//       container,
//       { x: 1000, opacity: 0 },
//       {
//         x: 0,
//         opacity: 1,
//         duration: 1,
//         ease: 'power3.out',
//         scrollTrigger: {
//           trigger: container,
//           start: 'top 85%',
//           toggleActions: 'play none none reverse',
//         },
//       }
//     );

//     // Text animation
//     gsap.fromTo(
//       textRef.current,
//       { y: 60, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 1,
//         delay: 0.2,
//         ease: 'power3.out',
//         scrollTrigger: {
//           trigger: textRef.current,
//           start: 'top 90%',
//         },
//       }
//     );

//     // Floating animation
//     const floatAnim = gsap.to(imageRef.current, {
//       y: 30,
//       x: 20,
//       rotationZ: 2,
//       duration: 1.8,
//       ease: 'sine.inOut',
//       yoyo: true,
//       repeat: -1,
//     });

//     // 3D Tilt effect
//     const imgEl = imageRef.current;
//     const tilt = (e) => {
//       const rect = imgEl.getBoundingClientRect();
//       const x = e.clientX - rect.left;
//       const y = e.clientY - rect.top;
//       const centerX = rect.width / 2;
//       const centerY = rect.height / 2;

//       const deltaX = x - centerX;
//       const deltaY = y - centerY;

//       const rotateX = -(deltaY / centerY) * 15;
//       const rotateY = (deltaX / centerX) * 15;

//       imgEl.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.08)`;
//     };

//     const resetTilt = () => {
//       imgEl.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
//     };

//     imgEl.addEventListener('mousemove', tilt);
//     imgEl.addEventListener('mouseleave', resetTilt);

//     return () => {
//       floatAnim.kill();
//       imgEl.removeEventListener('mousemove', tilt);
//       imgEl.removeEventListener('mouseleave', resetTilt);
//     };
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="overflow-hidden relative bg-gradient-to-b from-violet-600 to-indigo-800 px-6 md:px-20 py-20 text-white font-sans"
//     >
//       <div
//         ref={animatedContainerRef}
//         className="flex flex-col md:flex-row-reverse items-center justify-between w-full gap-12"
//       >
//         {/* Text Content */}
//         <div
//           ref={textRef}
//           className="md:w-1/2 mb-10 md:mb-0 md:pl-12 text-center md:text-left relative z-10 space-y-6"
//         >
//           <button className="px-5 py-2 rounded-full bg-white/10 text-white font-medium tracking-wide backdrop-blur hover:bg-white/20 transition-all">
//             Who We Are
//           </button>

//           <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg leading-tight">
//             A Team of <span className="text-pink-300">Passionate Innovators</span>
//           </h2>

//           <p className="text-lg leading-relaxed text-gray-200">
//             At <span className="font-semibold text-white">Weblodex</span>, we craft cutting-edge digital experiences tailored for the modern world. We're not just another software house — we're your technology partners. Whether it's a dynamic website, a full-stack web app, or a custom software solution, we bring your vision to life with clean code, creative design, and powerful functionality.
//           </p>

//           <button className="mt-6 px-6 py-3 bg-white text-indigo-700 font-semibold rounded-2xl shadow-md hover:bg-indigo-100 transition-all duration-300">
//             Read More
//           </button>
//         </div>

//         {/* Image */}
//         <div className="md:w-1/2 flex justify-center relative z-10">
//           <img
//             src={placeholderImg}
//             ref={imageRef}
//             alt="Team of developers at Weblodex working on innovative tech solutions"
//             className="rounded-3xl w-[90%] max-w-md shadow-2xl transition-transform duration-300"
//             style={{
//               transformStyle: 'preserve-3d',
//               transform: 'rotateX(0deg) rotateY(0deg)',
//               backgroundColor: 'transparent',
//             }}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhoWeAre;
