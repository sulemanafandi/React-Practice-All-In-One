import React from 'react'

function Contact() {
  return (
    <section className="bg-gradient-to-r from-gray-100 via-white to-gray-100 min-h-screen px-6 py-16">
      {/* Hero Heading */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
          Get in Touch
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We’d love to hear from you! Whether you have a question, feedback, or just want to say hello —
          drop us a message and we’ll get back to you quickly.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Form */}
        <form className="bg-white shadow-xl rounded-xl p-10 space-y-6 hover:shadow-2xl transition">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white font-bold py-3 rounded-lg shadow hover:bg-yellow-600 hover:scale-105 transition transform"
          >
            Send Message 🚀
          </button>
        </form>

        {/* Contact Info */}
        <div className="space-y-8">
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">📍 Address</h3>
            <p className="text-gray-600">123 Market Street, Karachi, Pakistan</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">📞 Phone</h3>
            <p className="text-gray-600">+92 300 1234567</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">✉️ Email</h3>
            <p className="text-gray-600">support@myshop.com</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">🌐 Social</h3>
            <div className="flex gap-6 text-gray-600">
              <a href="#" className="hover:text-yellow-500 transition">Facebook</a>
              <a href="#" className="hover:text-yellow-500 transition">Instagram</a>
              <a href="#" className="hover:text-yellow-500 transition">Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
