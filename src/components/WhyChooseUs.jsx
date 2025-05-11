import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle, Rocket, Code, Clock, MessageCircle, BadgeDollarSign } from 'lucide-react';
import img from './images/whychooseus.png';

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;

    // Slide in animation
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

    // Text fade in animation
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

    // Floating image animation
    const floatAnim = gsap.to(imageRef.current, {
      y: 30,
      x: 20,
      rotationZ: 2,
      duration: 1.8,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
    });

    // Tilt effect on image
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
      className="overflow-hidden relative bg-gradient-to-b from-indigo-800 to-violet-600 px-6 md:px-20 py-20 text-white font-sans"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div
          ref={textRef}
          className="md:w-1/2 text-center md:text-left space-y-8"
        >
          <button className="px-5 py-2 rounded-full bg-white/10 text-white font-medium tracking-wide backdrop-blur hover:bg-white/20 transition-all">
            Why Choose Us
          </button>

          <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg leading-tight">
            Empowering Your Digital Success 🚀
          </h2>

          <p className="text-lg leading-relaxed text-gray-200">
            Choose <span className="font-semibold text-white">Weblodex</span> for cutting-edge technologies, pixel-perfect designs, SEO-optimized code, and customized solutions — all delivered fast, affordably, and with transparent communication.
          </p>

          {/* Selling Points with Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            <div className="flex items-start gap-4">
              <Rocket className="w-8 h-8 text-pink-300" />
              <div>
                <h4 className="text-lg font-semibold">Expertise with Latest Technologies</h4>
                <p className="text-gray-300 text-sm mt-1">Building future-ready solutions with modern stacks and tools.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Code className="w-8 h-8 text-pink-300" />
              <div>
                <h4 className="text-lg font-semibold">SEO-Focused & Pixel-Perfect Designs</h4>
                <p className="text-gray-300 text-sm mt-1">Delivering clean, optimized code and flawless UI experiences.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="w-8 h-8 text-pink-300" />
              <div>
                <h4 className="text-lg font-semibold">Customized Solutions</h4>
                <p className="text-gray-300 text-sm mt-1">Every project tailored specifically to your business goals.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-8 h-8 text-pink-300" />
              <div>
                <h4 className="text-lg font-semibold">Fast & On-Time Delivery</h4>
                <p className="text-gray-300 text-sm mt-1">We meet your deadlines without compromising quality.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MessageCircle className="w-8 h-8 text-pink-300" />
              <div>
                <h4 className="text-lg font-semibold">Transparent Communication</h4>
                <p className="text-gray-300 text-sm mt-1">Clear, open updates throughout your project lifecycle.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <BadgeDollarSign className="w-8 h-8 text-pink-300" />
              <div>
                <h4 className="text-lg font-semibold">Affordable Premium Quality</h4>
                <p className="text-gray-300 text-sm mt-1">High-end services with fair, competitive pricing.</p>
              </div>
            </div>
          </div>

          {/* <button className="mt-10 px-6 py-3 bg-white text-indigo-700 font-semibold rounded-2xl shadow-md hover:bg-indigo-100 transition-all duration-300">
            Read More
          </button> */}
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center relative z-10">
          <img
            src={img}
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

export default WhyChooseUs;
