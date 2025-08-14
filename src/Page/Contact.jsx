import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen  text-white flex items-center justify-center px-4">
      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-8">
        {/* Left Section - Info */}
        <div>
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-300 mb-6">
            Have any questions? We’d love to hear from you. Fill out the form,
            and we’ll get back to you as soon as possible.
          </p>
          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold">Address</h2>
              <p className="text-gray-400">123 Street Name, City, Country</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Phone</h2>
              <p className="text-gray-400">+880 123 456 789</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Email</h2>
              <p className="text-gray-400">contact@example.com</p>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="p-6 border backdrop-blur-2xl  bg-white/5 rounded-xl shadow-lg">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full p-3 rounded-lg  border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-3 rounded-lg  border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                rows="4"
                placeholder="Your message"
                className="w-full p-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full border cursor-pointer hover:text-gray-700  hover:bg-[#00ffff] transition-colors p-3 rounded-lg font-semibold"
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
