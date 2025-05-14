import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  CheckCircle,
  Rocket,
  Code,
  Clock,
  MessageCircle,
  BadgeDollarSign,
} from 'lucide-react';
import img from './images/whychooseus.png';

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;

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

    gsap.fromTo(
      textRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        delay: 0.3,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 90%',
        },
      }
    );

    const floatAnim = gsap.to(imageRef.current, {
      y: 30,
      x: 20,
      rotationZ: 2,
      duration: 1.8,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
    });

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
      className="overflow-hidden relative bg-gradient-to-b from-indigo-800 to-violet-600 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 py-16 sm:py-20 text-white font-sans"
    >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div
          ref={textRef}
          className="w-full lg:w-1/2 text-center lg:text-left space-y-8"
        >
          <button className="px-5 py-2 rounded-full bg-white/10 text-white font-medium tracking-wide backdrop-blur hover:bg-white/20 transition-all">
            Why Choose Us
          </button>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg leading-tight">
            Empowering Your Digital Success 🚀
          </h2>

          <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-200">
            Choose <span className="font-semibold text-white">Weblodex</span> for cutting-edge technologies, pixel-perfect designs, SEO-optimized code, and customized solutions — all delivered fast, affordably, and with transparent communication.
          </p>

          {/* Selling Points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            {[
              {
                icon: <Rocket className="w-8 h-8 text-pink-300" />,
                title: 'Expertise with Latest Technologies',
                desc: 'Building future-ready solutions with modern stacks and tools.',
              },
              {
                icon: <Code className="w-8 h-8 text-pink-300" />,
                title: 'SEO-Focused & Pixel-Perfect Designs',
                desc: 'Delivering clean, optimized code and flawless UI experiences.',
              },
              {
                icon: <CheckCircle className="w-8 h-8 text-pink-300" />,
                title: 'Customized Solutions',
                desc: 'Every project tailored specifically to your business goals.',
              },
              {
                icon: <Clock className="w-8 h-8 text-pink-300" />,
                title: 'Fast & On-Time Delivery',
                desc: 'We meet your deadlines without compromising quality.',
              },
              {
                icon: <MessageCircle className="w-8 h-8 text-pink-300" />,
                title: 'Transparent Communication',
                desc: 'Clear, open updates throughout your project lifecycle.',
              },
              {
                icon: <BadgeDollarSign className="w-8 h-8 text-pink-300" />,
                title: 'Affordable Premium Quality',
                desc: 'High-end services with fair, competitive pricing.',
              },
            ].map((point, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-4"
              >
                <div className="flex-shrink-0">{point.icon}</div>
                <div>
                  <h4 className="text-lg font-semibold">{point.title}</h4>
                  <p className="text-gray-300 text-sm mt-1">{point.desc}</p>
                </div>
              </div>

            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={img}
            ref={imageRef}
            alt="Weblodex Team"
            className="rounded-3xl w-[80%] sm:w-[70%] md:w-[60%] max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl transition-transform duration-300"
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
