import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon from react-icons

const WhatsAppIcon = () => {
  return (
    <a
      href="https://wa.me/923156674654" // Your WhatsApp contact link
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-icon fixed bottom-10 right-10 z-50 flex items-center justify-center bg-green-500 text-white rounded-full p-4 hover:bg-green-600 transition-all duration-300 animate-pulse"
      style={{
        animation: 'pulseAnimation 2s infinite',
      }}
    >
      <FaWhatsapp size={40} />
    </a>
  );
}

export default WhatsAppIcon;
