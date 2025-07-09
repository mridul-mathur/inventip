"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Buttons from "./buttons";
import { CiMenuKebab } from "react-icons/ci";
import { motion } from "framer-motion";

type NavLink = {
  href?: string;
  label: string;
  subLinks?: { href: string; label: string }[];
};

const navLinks: NavLink[] = [
  { href: "/about", label: "about" },
  {
    label: "expertise",
    subLinks: [
      { href: "/expertise/0", label: "IP Research" },
      { href: "/expertise/1", label: "IP Strategy" },
      { href: "/expertise/2", label: "IP Portfolio Management" },
      { href: "/expertise/3", label: "Open Innovation" },
    ],
  },
  { href: "/insights", label: "insights" },
  { href: "/careers", label: "careers" },
];

export function useNavContrast(): "dark" | "light" {
  const [contrast, setContrast] = useState<"dark" | "light">("light");
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!barRef.current) return;
    const barHeight = barRef.current.getBoundingClientRect().height;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionTheme = entry.target.getAttribute("data-theme") as
              | "dark"
              | "light"
              | null;
            if (sectionTheme) {
              setContrast(sectionTheme === "dark" ? "light" : "dark");
            }
          }
        });
      },
      {
        rootMargin: `-${barHeight}px 0px 0px 0px`,
        threshold: 0.01,
      }
    );
    document
      .querySelectorAll<HTMLElement>("section[data-theme]")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  (useNavContrast as any).barRef = barRef;
  return contrast;
}

const Dropdown: React.FC<{
  label: string;
  subLinks: NavLink["subLinks"];
  textColour?: "dark" | "light";
}> = ({ label, subLinks, textColour = "dark" }) => (
  <div className=" relative group z-50">
    <span className="cursor-pointer flex items-center justify-center lg:justify-start">
      <Buttons color={textColour} underline={true}>
        {label}
      </Buttons>
    </span>
    {label.toLowerCase() === "expertise" && (
      <motion.div
        className=" absolute left-0 top-full flex flex-col border border-secondary overflow-hidden rounded-md w-fit text-left opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500"
        style={{
          background: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderRadius: "10px",
        }}
      >
        {subLinks?.map((subLink, index) => (
          <Link
            key={index}
            href={subLink.href}
            className="px-4 py-2 group bg-primary hover:bg-primary duration-500 whitespace-nowrap"
          >
            <Buttons color={textColour}>
              <div className="group-hover:bg-gradient-to-r group-hover:from-accent1 group-hover:to-accent2 group-hover:text-transparent group-hover:bg-clip-text duration-500">
                {subLink.label}
              </div>
            </Buttons>
          </Link>
        ))}
      </motion.div>
    )}
  </div>
);

const NavLinkComponent: React.FC<{
  link: NavLink;
  onClick?: () => void;
  textColour?: "dark" | "light";
}> = ({ link, onClick, textColour = "dark" }) => {
  if (link.subLinks && link.label.toLowerCase() !== "expertise") {
    return (
      <p key={link.href}>
        <Link href={link.subLinks[0].href} onClick={onClick}>
          <Buttons color={textColour} underline={true}>
            {link.label}
          </Buttons>
        </Link>
      </p>
    );
  }
  return link.subLinks ? (
    <Dropdown
      label={link.label}
      subLinks={link.subLinks}
      textColour={textColour}
    />
  ) : (
    <p key={link.href}>
      <Link href={link.href || "#"} onClick={onClick}>
        <Buttons color={textColour} underline={true}>
          {link.label}
        </Buttons>
      </Link>
    </p>
  );
};

export function Nav() {
  const textColour = useNavContrast();
  const barRef = (useNavContrast as any).barRef;
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const menuClass = isOpen
    ? "flex flex-col lg:flex lg:flex-row lg:items-center w-full lg:w-auto mt-4 lg:mt-0"
    : "hidden lg:flex lg:flex-row lg:items-center w-full lg:w-auto mt-4 lg:mt-0";

  return (
    <main
      ref={barRef}
      className={`fixed top-0 w-full backdrop-blur py-1 z-40 border-b border-[#191919]`}
    >
      <nav className="flex items-center justify-between py-3 px-6 lg:px-12 text-submin">
        <Link href="/" className="capitalize font-bold text-lg">
          <img
            src={
              textColour === "dark"
                ? "/images/inventIPblack.png"
                : "/images/inventIP.png"
            }
            alt="inventIP"
            className="h-6 w-auto"
          />
        </Link>

        <div className={menuClass}>
          <div className="flex flex-col lg:flex-row lg:gap-8 text-center lg:text-left capitalize relative">
            {navLinks.map((link, index) => (
              <NavLinkComponent
                key={index}
                link={link}
                onClick={toggleMenu}
                textColour={textColour}
              />
            ))}
          </div>
        </div>

        <div onClick={toggleMenu} className="cursor-pointer text-lg lg:hidden">
          <CiMenuKebab />
        </div>

        <div className="hidden lg:block">
          <Link href="/contact">
            <Buttons color={textColour} arrow underline>
              Contact Us
            </Buttons>
          </Link>
        </div>
      </nav>
    </main>
  );
}

export default Nav;
