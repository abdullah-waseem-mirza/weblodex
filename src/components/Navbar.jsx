"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import clsx from "clsx"
import { Link } from "react-router-dom"
import webLogo from '../components/images/weblogo.png';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={clsx(
        "fixed top-0 w-full z-50 transition-all duration-300 shadow-md",
        scrolled
          ? "bg-violet-600/70 backdrop-blur text-white"
          : "bg-gradient-to-r from-violet-400 via-violet-600 to-purple-500 text-white"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* <span className="font-bold text-xl sm:text-2xl lg:text-3xl">Weblodex</span> */}
            <img
              src={webLogo}
              alt="Weblodex Logo"
              className="h-[200px] w-[300px] -ml-[30px]"
            />

          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {["Home", "About", "Services", "Team", "Projects", "Contact"].map((item, i) => (
              <Link
                key={i}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="hover:text-violet-200 transition-colors cursor-pointer text-sm sm:text-base lg:text-lg"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-white hover:text-violet-200 hover:bg-violet-800/50 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-4 pt-4 pb-6 bg-gradient-to-r from-violet-700 via-violet-600 to-purple-500 space-y-2">
            {["Home", "About", "Services", "Team", "Projects", "Contact"].map((item, i) => (
              <Link
                key={i}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                onClick={toggleMenu}
                className="block px-3 py-2 rounded-md text-white hover:bg-violet-800/50 cursor-pointer text-sm sm:text-base"
                style={{
                  animation: `slideIn 0.3s ease ${i * 0.1}s forwards`,
                  opacity: 0,
                  transform: "translateY(10px)",
                }}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
