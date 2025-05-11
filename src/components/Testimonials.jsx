"use client"

import { useEffect, useState, useRef } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import client1 from "./images/waseemMirza.png"
import client2 from "./images/faranClient.png"
import client3 from "./images/aburazaq.jpeg"

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayRef = useRef(null)
  const sliderRef = useRef(null)

  const testimonials = [
    {
        id: 1,
        name: "Dr Waseem",
        role: "Doctor",
        company: "https://mrhealth.info", // Full URL provided here
        text: "I needed a portfolio and e-commerce website, and this team delivered an amazing result, on time and with great attention to detail. They even offered 1 year of free website maintenance, which was a great bonus. I’m very pleased with the final product!",
        image: client1,
        rating: 5,
      },
    {
      id: 2,
      name: "Faran",
      role: "Client",
      company: "https://Techtohub.co.uk", // Full URL provided here
      text: "Working with this team has been a pleasure. They delivered my website with a few areas needing improvement, and after I provided feedback, they redesigned it free of cost and on time. Their commitment to excellence is unmatched, and I really look forward to working with them on future projects.",
      image: client2,
      rating: 5,
    },
    {
      id: 3,
      name: "Abu Razzaq",
      role: "Crypto Expert",
      company: "https://cp50.io", // Full URL provided here
      text: "Weblodex created an outstanding cryptocurrency preselling website for me. The design is sleek, and the user experience is seamless. They delivered on time and exceeded my expectations. Highly recommend their services!",
      image: client3,
      rating: 5,
    },
  ]

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
      }, 4000)
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying, testimonials.length])

  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative py-10 overflow-hidden bg-gradient-to-b from-violet-600 to-indigo-800">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-pink-200 opacity-20 blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-indigo-200 opacity-30 blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-yellow-200 opacity-20 blur-lg"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-6 text-white">
          Client Testimonials
        </h2>
        <p className="text-lg sm:text-xl text-center text-indigo-100 mb-16 max-w-2xl mx-auto">
          Hear what our clients have to say about their experience working with our team
        </p>

        <div className="relative" ref={sliderRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className="relative h-[500px] md:h-[400px] max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => {
              const isActive = index === activeIndex
              const isPrev = index === activeIndex - 1 || (activeIndex === 0 && index === testimonials.length - 1)
              const isNext = index === activeIndex + 1 || (activeIndex === testimonials.length - 1 && index === 0)

              let position = "opacity-0 scale-90"
              let zIndex = 0

              if (isActive) {
                position = "opacity-100 scale-100 translate-x-0"
                zIndex = 30
              } else if (isPrev) {
                position = "opacity-70 scale-90 -translate-x-[60%]"
                zIndex = 20
              } else if (isNext) {
                position = "opacity-70 scale-90 translate-x-[60%]"
                zIndex = 20
              }

              return (
                <div
                  key={testimonial.id}
                  className={`absolute top-0 left-0 w-full transition-all duration-700 ease-out ${position}`}
                  style={{ zIndex }}
                >
                  <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center">
                    <div className="relative">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full blur-sm opacity-70 scale-110"></div>
                        <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-white shadow-lg relative overflow-hidden">
                          <img
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-pink-400"></div>
                        <div className="absolute -bottom-1 -left-1 w-4 h-4 rounded-full bg-indigo-400"></div>
                      </div>

                      <div className="flex justify-center mt-3 gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="flex-1 text-center md:text-left">
                      <div className="relative mb-4">
                        <span className="absolute -top-6 -left-2 text-6xl text-indigo-200 font-serif">"</span>
                        <p className="text-gray-700 relative z-10 text-lg sm:text-xl">{testimonial.text}</p>
                        <span className="absolute -bottom-8 -right-2 text-6xl text-indigo-200 font-serif">"</span>
                      </div>

                      <div className="mt-6">
                        <h4 className="font-bold text-xl sm:text-2xl">{testimonial.name}</h4>
                        <p className="text-indigo-600 text-lg sm:text-xl">{testimonial.role}</p>
                        <p className="text-gray-500 text-sm sm:text-base">
                          <a
                            href={testimonial.company} // Use the full URL here
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-indigo-400 transition-colors"
                          >
                            {testimonial.company.replace(/^https?:\/\//, '')} {/* Strip "http(s)://" for display */}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="flex justify-between items-center mt-4">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white shadow-md hover:bg-indigo-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-indigo-600" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "bg-indigo-600 w-10" : "bg-indigo-200 hover:bg-indigo-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white shadow-md hover:bg-indigo-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-indigo-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
