"use client";

import React, { useState } from "react";
import Link from "next/link";
import Buttons from "./buttons";

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main className="fixed top-0  w-full text-[#ADA5A5] backdrop-blur py-3 mix-blend-difference z-[999]">
      <nav className="flex items-center justify-between py-3 px-6 lg:px-12">
        {/* Logo */}
        <Link href="/" className="font-bold text-lg">
          LOGO
        </Link>

        {/* Hamburger Menu */}
        <div
          onClick={toggleMenu}
          className="cursor-pointer text-lg lg:hidden"
        >
          MENU
        </div>

        {/* Links Section */}
        <div
          className={`${isOpen ? "flex" : "hidden"
            } flex-col lg:flex lg:flex-row lg:items-center w-full lg:w-auto mt-4 lg:mt-0`}
        >
          <ul className="flex flex-col lg:flex-row lg:gap-8 text-center lg:text-left capitalize">
            <li>
              <Link href="/about" onClick={toggleMenu}>
                about
              </Link>
            </li>
            <li>
              <Link href="/expertise" onClick={toggleMenu}>
                expertise
              </Link>
            </li>
            <li>
              <Link href="/resources" onClick={toggleMenu}>
                resources
              </Link>
            </li>
            <li>
              <Link href="/careers" onClick={toggleMenu}>
                careers
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Button */}
        <div className="hidden lg:block border border-[#ADA5A5] ">
          <Link
            href="/contact"
            className="rounded-full px-4 py-2 text-[#ADA5A5] font-semibold"
          >
            contact
          </Link>
        </div>
      </nav>
    </main>
  );
}

export default Nav;
