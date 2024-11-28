"use client";

import React, { useState } from "react";
import Link from "next/link";
import Buttons from "./buttons"; 
import { CiMenuKebab } from "react-icons/ci";


export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: "/about", label: "about" },
    { href: "/expertise", label: "expertise" },
    { href: "/resources", label: "resources" },
    { href: "/careers", label: "careers" },
  ];

  return (
    <main className="fixed top-0 w-full text-black backdrop-blur py-1 z-[999]">
      <nav className="flex items-center justify-between py-3 px-6 lg:px-12 text-submin">
        {/* Logo */}
        <Link href="/" className="font-bold text-lg">
          LOGO
        </Link>

        {/* Hamburger Menu */}
       

        <div
          className={`${isOpen ? "flex" : "hidden"} flex-col lg:flex lg:flex-row lg:items-center w-full lg:w-auto mt-4 lg:mt-0`}
        >
          <ul className="flex flex-col lg:flex-row lg:gap-8 text-center lg:text-left capitalize">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={toggleMenu}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div onClick={toggleMenu} className="cursor-pointer text-lg lg:hidden">
        <CiMenuKebab />
        </div>

        <div className="hidden lg:block">
          <Link href="/contact">
            <Buttons color="black">Contact</Buttons>
          </Link>
        </div>
      </nav>
    </main>
  );
}

export default Nav;
