import Aos from "aos";
import React, { useEffect, useRef } from "react";
import { HiLocationMarker, HiPhone, HiMail } from "react-icons/hi";
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
  (result) => {
    console.log(result.text);
    Swal.fire({
      icon: "success",
      title: "Message Sent!",
      text: "Your message has been delivered successfully ",
      confirmButtonColor: "#00ffff",
    });
    form.current.reset(); 
  },
  (error) => {
    console.log(error.text);
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong. Please try again ",
      confirmButtonColor: "#00ffff",
    });
  }
);

  };

  return (
    <div className="min-h-screen text-white flex items-center justify-center px-4 ">
      <div
        data-aos="fade-right"
        className="max-w-5xl w-full grid md:grid-cols-2 gap-10"
      >
        {/* Left Section - Info */}
        <div className="space-y-8">
          <h1 className="text-4xl font-bold mb-2">Contact Me</h1>
          <p className="text-gray-300 mb-6">
            Have any questions or want to collaborate? Reach out through the
            form, and I’ll get back to you as soon as possible.
          </p>

          <div className="space-y-4">
            {/* Address */}
            <div className="flex items-center gap-3 bg-gray-800/50 p-4 rounded-xl shadow-md hover:shadow-[#00ffff] transition duration-300">
              <HiLocationMarker className="text-[#00ffff] text-2xl" />
              <div>
                <h2 className="font-semibold text-white">Address</h2>
                <p className="text-gray-400">Dhaka, Bangladesh</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 bg-gray-800/50 p-4 rounded-xl shadow-md hover:shadow-[#00ffff] transition duration-300">
              <HiPhone className="text-[#00ffff] text-2xl" />
              <div>
                <h2 className="font-semibold text-white">Phone</h2>
                <p className="text-gray-400">+8801882812787</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 bg-gray-800/50 p-4 rounded-xl shadow-md hover:shadow-[#00ffff] transition duration-300">
              <HiMail className="text-[#00ffff] text-2xl" />
              <div>
                <h2 className="font-semibold text-white">Email</h2>
                <p className="text-gray-400">royutso003@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div
          data-aos="zoom-in-left"
          className="p-8 backdrop-blur-2xl bg-white/5 rounded-xl shadow-2xl hover:shadow-[#00ffff] transition duration-300"
        >
          <form ref={form} onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                id="name"
                type="text"
                  name="from_name"
                placeholder="Your name"
                className="w-full p-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#00ffff] bg-gray-800 text-white"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                 name="from_email"
                placeholder="Your email"
                className="w-full p-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#00ffff] bg-gray-800 text-white"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                rows="5"
                id="message"
                name="message"
                placeholder="Your message"
                className="w-full p-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#00ffff] bg-gray-800 text-white"
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
