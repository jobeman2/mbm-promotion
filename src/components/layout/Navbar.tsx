'use client';

import {
  Menu,
  Home,
  PhoneCall,
  Info,
  Users,
  HelpCircle,
  Grid,
  DollarSign,
  FileQuestionMark,
  CircleQuestionMark
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', icon: Home, label: 'Home' },
    { href: '#contact', icon: CircleQuestionMark, label: ' How it works' },
    { href: '#pricing', icon: DollarSign, label: 'Pricing' },
    { href: '#about', icon: Info, label: 'About Us' },
    
    { href: '#brands', icon: Grid, label: 'Brands' },
  ];

  function handleClick() {
    setMenuOpen(false);
  }

  return (
    <header className="fixed top-0 w-full z-50 px-4 mt-4">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        className="backdrop-blur-xl bg-white/80 shadow-lg px-6 py-4 rounded-full flex items-center justify-between max-w-7xl mx-auto"
      >
        {/* Logo & Mobile Menu */}
        <div className="flex items-center gap-4 pl-2">
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="md:hidden w-10 h-10 rounded-full bg-white flex items-center justify-center shadow hover:shadow-md transition"
          >
            <Menu className="w-5 h-5 text-gray-700" />
          </motion.button>

          {/* Shared logo element */}
          <motion.div
            layoutId="logo"
            transition={{ type: 'spring', stiffness: 80 }}
          >
            <a
              href="#home"
              className="text-2xl font-bold text-green-700 tracking-tight select-none"
              onClick={handleClick}
            >
              mbm
            </a>
          </motion.div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] text-gray-800 font-medium">
          {navLinks.map(({ href, icon: Icon, label }) => (
            <motion.div
              key={label}
              whileHover={{ scale: 1.1, color: '#16a34a' }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1 cursor-pointer"
            >
              <Icon className="w-4 h-4" />
              <a
                href={href}
                onClick={handleClick}
                className="hover:text-green-700 transition"
              >
                {label}
              </a>
            </motion.div>
          ))}
        </nav>

        {/* Call Us Button */}
        <motion.a
  href="tel:123-456-7890"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition shadow flex items-center gap-2 select-none"
  aria-label="Call Us"
  onClick={handleClick}
>
  <div className="relative">
    <PhoneCall className="w-4 h-4 animate-pulse" />
    <span className="absolute top-0 right-0 w-2 h-2 bg-green-300 rounded-full animate-ping" />
  </div>
  Call Us
</motion.a>
      </motion.div>

      {/* Mobile menu animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/90 backdrop-blur-lg shadow-md rounded-lg max-w-xs mx-auto mt-2 absolute left-1/2 transform -translate-x-1/2 w-[90vw] z-40"
          >
            <ul className="flex flex-col font-semibold text-gray-700 divide-y divide-gray-200">
              {navLinks.map(({ href, icon: Icon, label }) => (
                <li key={label} className="last:divide-none">
                  <a
                    href={href}
                    onClick={handleClick}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-green-100 rounded-md transition"
                  >
                    <Icon className="w-5 h-5" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
