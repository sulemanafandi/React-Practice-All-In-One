import React from 'react'

function About() {
  return (
    <section className="bg-gray-100 min-h-screen px-6 py-12">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-800 mb-6 border-b-4 border-yellow-400 inline-block">
        About Us
      </h1>

      {/* Content */}
      <p className="text-gray-700 leading-relaxed mb-6 max-w-4xl">
        Welcome to <span className="text-yellow-500 font-semibold">MyShop</span>, 
        your trusted online store for premium products. We believe in delivering 
        quality, affordability, and a seamless shopping experience. Our mission 
        is to bring you the best items with modern design and reliable service.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6 max-w-4xl">
        Founded with passion and dedication, we aim to make online shopping 
        simple, enjoyable, and secure. Whether you’re looking for the latest 
        trends or timeless essentials, we’ve got you covered.
      </p>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-8 mt-10">
        <div className="p-6 rounded-lg bg-white shadow hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-gray-700 mb-3">✨ Quality Products</h3>
          <p className="text-gray-600">We carefully select items to ensure top-notch quality and durability.</p>
        </div>
        <div className="p-6 rounded-lg bg-white shadow hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-gray-700 mb-3">⚡ Fast Delivery</h3>
          <p className="text-gray-600">Quick and reliable shipping so you get your products on time.</p>
        </div>
        <div className="p-6 rounded-lg bg-white shadow hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-gray-700 mb-3">💬 Customer Support</h3>
          <p className="text-gray-600">Friendly support team ready to help you anytime you need.</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12">
        <button className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow hover:bg-yellow-600 transition">
          Explore Our Products
        </button>
      </div>
    </section>
  )
}

export default About
