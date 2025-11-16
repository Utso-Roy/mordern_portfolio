import Aos from "aos";
import React, { useEffect, useRef } from "react";
import { HiLocationMarker } from "react-icons/hi";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();

  useEffect(() => {
    Aos.init({ duration: 1500, once: true });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_j3ch9pm",
        "template_g3gu8nf",
        form.current,
        "LusYBcSZEa1SxHcQN"
      )
      .then(
        () => {
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Your message has been delivered successfully.",
            confirmButtonColor: "#00ffff",
          });
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong. Please try again.",
            confirmButtonColor: "#00ffff",
          });
        }
      );
  };

  return (
    <div className="py-10 text-white px-4  ">
      <div
        data-aos="fade-right"
        className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mx-auto"
      >
        {/* Left Section - Info */}
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-[#00ffff] tracking-wide">
            Let’s Connect
          </h1>
          <p className="text-gray-300 leading-relaxed">
            Have any questions or want to collaborate? Reach out through the
            form, or connect with me on social platforms below.
          </p>

          <div className="space-y-4">
            {/* Address */}
            <div className="flex items-center gap-3 bg-gray-600/40 p-4 rounded-xl shadow-lg  transition duration-300">
              <HiLocationMarker className="text-[#00ffff] text-2xl" />
              <div>
                <h2 className="font-semibold text-white">Location</h2>
                <p className="text-gray-400">Dhaka, Bangladesh</p>
              </div>
            </div>

           <div className="group flex items-start gap-4 bg-gray-600/40 p-5 rounded-2xl backdrop-blur-sm border border-gray-700/50  ">
              <div className="bg-[#00ffff]/10 p-3 rounded-xl group-hover:bg-[#00ffff]/20 transition-colors">
                <svg className="w-6 h-6 text-[#00ffff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h2 className="font-semibold text-white text-lg mb-1">Response Time</h2>
                <p className="text-gray-400">Usually within 24 hours</p>
                <p className="text-gray-500 text-sm mt-1">Saturday - Friday, 9AM - 6PM</p>
              </div>
            </div>




            {/* Social Links */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 gap-3 mt-6">
              <a
                href="https://github.com/Utso-Roy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-600/40 px-4 py-3 rounded-xl shadow-lg hover:bg-[#00ffff] hover:text-gray-900 transition duration-300"
              >
                <FaGithub className="text-xl" />
                <span className="font-medium">GitHub</span>
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-600/40 px-4 py-3 rounded-xl shadow-lg hover:bg-[#00ffff] hover:text-gray-900 transition duration-300"
              >
                <FaFacebook className="text-xl" />
                <span className="font-medium">Facebook</span>
              </a>

              <a
                href="https://linkedin.com/in/utsoroy8876"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-600/40 px-4 py-3 rounded-xl shadow-lg hover:bg-[#00ffff] hover:text-gray-900 transition duration-300"
              >
                <FaLinkedin className="text-xl" />
                <span className="font-medium">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div
          data-aos="zoom-in-left"
          className="p-8 backdrop-blur-2xl bg-white/5 rounded-2xl border border-gray-700 shadow-2xl hover:shadow-[#00ffff]/50 transition duration-300"
        >
          <form ref={form} onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="from_name"
                placeholder="Your name"
                className="w-full p-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00ffff] bg-gray-600/40 text-white"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">
                Email
              </label>
              <input
                type="email"
                name="from_email"
                placeholder="Your email"
                className="w-full p-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00ffff] bg-gray-600/40 text-white"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">
                Message
              </label>
              <textarea
                rows="5"
                id="message"
                name="message"
                placeholder="Write your message..."
                className="w-full p-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00ffff] bg-gray-600/40 text-white"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full border border-[#00ffff] cursor-pointer hover:text-gray-900 hover:bg-[#00ffff] transition-colors p-3 rounded-lg font-semibold text-white"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
