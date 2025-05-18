import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import { FaWhatsapp } from 'react-icons/fa';



export default function Contact() {
  useEffect(() => {
    emailjs.init("XBBYAT1ey2yBBMb4S");
  }, []);

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [userName, setUserName] = useState('');

  // Function to send auto-reply
  const sendAutoReply = async (recipientEmail) => {
    if (!recipientEmail) {
      console.error("Recipient email is missing");
      return;
    }

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID,
        {
          to_email: recipientEmail,
          to_name: userName,
          message: "Thank you for reaching out to Weblodex!"
        },
        import.meta.env.VITE_EMAILJS_USER_ID
      );
      // console.log('Auto-reply sent successfully');
    } catch (error) {
      console.error('Error sending auto-reply:', error);
    }
  };



  // Modify handleSubmit to include auto-reply
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send original email
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_USER_ID
      );

      // Send auto-reply, passing the correct email address
      await sendAutoReply(email);

      // console.log(result.text);
      alert('✅ Message sent successfully!');

      // Clear form fields
      setUserName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (error) {
      console.error(error.text);
      alert('❌ Error: ' + error.text);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-b from-indigo-900 to-violet-500 text-white">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-800 via-violet-700 to-violet-600 z-0" />
        <div className="absolute inset-0 bg-black/20 z-[1]" />
        <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center relative z-10 text-center">
          <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 text-transparent bg-gradient-to-r from-violet-200 via-violet-300 to-pink-300 bg-clip-text drop-shadow-xl">
            Contact Us
          </h1>
          <p className="text-md sm:text-xl md:text-[22px] text-white drop-shadow-lg font-sans max-w-2xl">
            We are here to help you with your digital needs. Let's connect.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center text-sm">
          <Link to="/" className="text-gray-200 hover:text-white">
            HOME
          </Link>
          <span className="mx-2 text-gray-300">›</span>
          <span className="text-white font-semibold">CONTACT US</span>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-20 grid md:grid-cols-2 gap-16 text-white">
        {/* Contact Information */}
        <div className="space-y-10">
          <div>
            <h3 className="text-2xl font-bold text-violet-200 mb-2">📞 Phone</h3>
            <p className="text-gray-200">Call us anytime, at your convenience. We are always here to assist you.</p>
            <p className="mt-2 text-xl font-semibold text-yellow-300">(+92) 3156674654
              <br />
              (+92) 3134376410
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-violet-200 mb-2">📧 Email us</h3>
            <p className="text-gray-200">Have a project or question? Reach out.</p>
            <p className="mt-2 text-xl font-semibold text-yellow-300">weblodex@gmail.com</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-violet-200 mb-2">🏙️ Headquater</h3>
            <p className="text-gray-200">2548 Market St, Suite 12345, San Francisco, CA 94104, USA</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-violet-200 mb-2">🚩 Office</h3>
            <p className="text-gray-200">208 B. Ahmad Yar Block, Mustafa Town, Lahore, 54000</p>
          </div>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="space-y-6 text-white">
          <div>
            <label className="block mb-2 text-sm font-medium text-violet-100">Your Name *</label>
            <input
              type="text"
              name="name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-600 text-white focus:ring-2 focus:ring-pink-500"
              placeholder="Name"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-violet-100">Your Email *</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-600 text-white focus:ring-2 focus:ring-pink-500"
              placeholder="Email"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-violet-100">Subject</label>
            <input
              type="text"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-600 text-white focus:ring-2 focus:ring-pink-500"
              placeholder="Subject"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-violet-100">Comments *</label>
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows="5"
              className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-600 text-white focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 text-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-violet-600 rounded-md hover:bg-violet-700 focus:ring-4 focus:ring-pink-300 disabled:opacity-50"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
      {/* CTA Section */}
    <section className="py-16 bg-gradient-to-b from-[#7752DC] to-indigo-800">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white animate-fadeIn">
      Have a concept in mind or want a website makeover? We’re just a message away.
    </h2>
    <p className="text-gray-300 mb-8 animate-slideUp">We are just a Click Away!</p>
    <a
      href="https://wa.me/923156674654"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-indigo-500 text-white px-6 py-3 rounded-md transition-all duration-300 hover:bg-indigo-600 ring-animation"
    >
      <FaWhatsapp className="w-5 h-5" />
      Chat on WhatsApp
    </a>
  </div>
</section>


    </div>
  );
} 
