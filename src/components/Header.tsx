import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `
      block px-4 py-2 text-sm font-medium transition-colors duration-200
      ${
        isActive ? "text-accent" : "text-text-secondary hover:text-text-primary"
      }
    `;

  return (
    <header className="border-b border-border bg-surface shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
            <span className="text-2xl">🐉</span>
          </div>
          <h1 className="text-xl font-bold text-text-primary">
            Dragon Martial Arts Academy
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/home" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/Contact-us" className={navLinkClass}>
            Contact Us
          </NavLink>
        </nav>

        {/* Desktop Sign Out */}
        <button
          onClick={() => navigate("/login")}
          className="hidden md:block text-text-secondary hover:text-text-primary transition-colors duration-200 font-medium text-sm"
        >
          Sign Out
        </button>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-text-primary"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-surface">
          <nav className="flex flex-col py-2">
            <NavLink
              to="/home"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              About
            </NavLink>

            <NavLink
              to="/Contact-us"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </NavLink>

            <button
              onClick={() => {
                setMenuOpen(false);
                navigate("/login");
              }}
              className="text-left px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary"
            >
              Sign Out
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
