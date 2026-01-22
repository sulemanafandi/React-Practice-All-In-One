import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-800 shadow-md">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="https://png.pngtree.com/png-vector/20220930/ourmid/pngtree-shopping-logo-design-for-online-store-website-png-image_6239056.png"
            alt="shop logo"
            className="w-10 h-10 rounded-full border-2 border-gray-600"
          />
          <span className="text-white font-bold text-lg tracking-wide">MyShop</span>
        </div>

        {/* Hamburger Button (mobile only) */}
        <button
          className="text-white md:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Menu Links */}
        <div className={`flex-col md:flex md:flex-row gap-6 text-lg font-medium absolute md:static bg-gray-800 md:bg-transparent left-0 w-full md:w-auto px-6 md:px-0 transition-all duration-300 ${open ? 'top-14' : 'top-[-400px]'}`}>
          <Menu to="/" title="Home" />
          <Menu to="/products" title="Products" />
          <Menu to="/about" title="About" />
          <Menu to="/contact" title="Contact" />
        </div>
      </div>
    </nav>
  )
}

const Menu = ({ to, title }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `transition-colors duration-300 hover:text-yellow-400 ${
          isActive ? 'text-[tomato] font-semibold' : 'text-gray-200'
        }`
      }
    >
      {title}
    </NavLink>
  )
}

export default Navbar
