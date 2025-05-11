import { useState } from "react";
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiArrowRight, FiMapPin, FiPhone, FiMail, FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";
const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    alert(`Subscribed with ${email}`);
  };

  return (
    <footer className="w-full bg-gradient-to-b from-indigo-800 to-violet-600 text-white">
      {/* Wave SVG Divider */}
      <div className="w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-12 rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,
              168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,
              18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,
              0,0,321.39,56.44Z"
            className="fill-purple-500"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="space-y-6 text-center sm:text-left">
            <div className="flex justify-center sm:justify-start items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <span className="text-indigo-700 text-xl font-bold">W</span>
              </div>
              <h2 className="text-2xl font-bold">Weblodex</h2>
            </div>
            <p className="text-indigo-100 max-w-xs mx-auto sm:mx-0">
              Empowering digital experiences with cutting-edge solutions. Your vision, our expertise.
            </p>
            <div className="flex justify-center sm:justify-start space-x-4">
              <a
                href="https://www.linkedin.com/company/weblodex/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="https://www.instagram.com/weblodex?igsh=ZmM3YnUxN2o4ZWx6"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://wa.me/923156674654"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>

                <div className="text-center sm:text-left">
                <h3 className="text-lg font-semibold mb-6 border-b border-indigo-400 pb-2">
                  Quick Links
                </h3>
                <ul className="space-y-3">
                  {[
                  { name: "Home", path: "/" },
                  { name: "About Us", path: "/about" },
                  { name: "Team", path: "/team" },
                  { name: "Services", path: "/services" },
                  { name: "Contact Us", path: "/contact" }
                  ].map((item) => (
                  <li key={item.name}>
                    <a 
                    href={item.path}
                    className="text-indigo-100 hover:text-white flex items-center justify-center sm:justify-start group"
                    >
                    <FiArrowRight
                      size={14}
                      className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    {item.name}
                    </a>
                  </li>
                  ))}
                </ul>
                </div>

                {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-6 border-b border-indigo-400 pb-2">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start justify-center sm:justify-start">
                <FiMapPin className="mr-3 text-indigo-300 flex-shrink-0 mt-1" size={18} />
                <span className="text-indigo-100 text-sm sm:text-base max-w-[200px]">
                  Sabzazar, Multan Road, Lahore, Punjab
                </span>
              </li>
              <li className="flex items-center justify-center sm:justify-start">
                <FiPhone className="mr-3 text-indigo-300 flex-shrink-0" size={18} />
                <span className="text-indigo-100">+92 315-6674654</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start">
                <FiMail className="mr-3 text-indigo-300 flex-shrink-0" size={18} />
                <span className="text-indigo-100">weblodex@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-6 border-b border-indigo-400 pb-2">
              Subscribe
            </h3>
            <p className="text-indigo-100 mb-4">Stay updated with our latest news and offers.</p>
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 space-y-2 sm:space-y-0">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/10 border border-indigo-400 text-white placeholder:text-indigo-200 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <button
                onClick={handleSubscribe}
                className="bg-white text-indigo-700 hover:bg-indigo-100 hover:text-indigo-800 font-semibold px-4 py-2 rounded transition-colors"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-indigo-400/30 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
          <p className="text-indigo-200 text-sm">
            &copy; {new Date().getFullYear()} Weblodex. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((text) => (
              <a key={text} href="#" className="text-indigo-200 hover:text-white text-sm">
                {text}
              </a>
            ))}
          </div>
        </div>

        {/* Made with love */}
        <div className="text-center mt-8 text-indigo-200 text-sm flex items-center justify-center">
          <span>Made with</span>
          <FiHeart className="mx-1 text-pink-400" size={14} />
          <span>by Weblodex Team</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
