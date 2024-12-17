
"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";


function WhatTheySay() {
    const cardWidth = 600; // Width of one card in pixels
    const move = cardWidth + 50; // Distance to move per click
    const aboutUs = [
        {
            name: "Healthcare",
            quate: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor in ",
            image: "/images/img.png",
            company: "HealthCo.Lcc",
        },
        {
            name: "Technology",
            quate: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor in ",
            image: "/images/img.png",
            company: "TechCorp.Lcc",
        },
        {
            name: "Finance",
            quate: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor in ",
            image: "/images/img.png",
            company: "FinanceCo.Lcc",
        },
        {
            name: "Education",
            quate: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor in ",
            image: "/images/img.png",
            company: "EduCorp.Lcc",
        },
    ];

    const totalCards = aboutUs.length;
    const maxRightMoves = Math.max(totalCards - 2, 0); // Limit right movements based on the number of cards
    const viewportWidth = 1000; // Approximate viewport width in pixels
    const maxRightConstraint = -(cardWidth * totalCards - viewportWidth);

    const [currentPosition, setCurrentPosition] = useState(0);
    const [currentMoveCount, setCurrentMoveCount] = useState(0); // Track the number of right moves
    const carouselRef = useRef(null);

    // Handlers for moving carousel
    const moveLeft = () => {
        setCurrentPosition((prev) => Math.min(prev + move, 0)); // Move left
        if (currentMoveCount > 0) setCurrentMoveCount(currentMoveCount - 1); // Decrease move count
    };

    const moveRight = () => {
        if (currentMoveCount < maxRightMoves) {
            setCurrentPosition((prev) => Math.max(prev - move, maxRightConstraint)); // Move right
            setCurrentMoveCount(currentMoveCount + 1); // Increment move count
        }
    };

    return (
        <main className="min-h-[60vh] w-screen bg-white p-4 md:p-16 overflow-hidden">

            <div className="w-auto mb-5 flex flex-col md:flex-row justify-between">
                <h1 className="text-head capitalize">what they say about us</h1>
                <div className="flex gap-5 mt-5 md:mt-0">
                    <button
                        onClick={moveLeft}
                        className="px-4 py-2 bg-gray-300 rounded-l"
                    >
                        ←
                    </button>
                    <button
                        onClick={moveRight}
                        className={`px-4 py-2 bg-gray-300 rounded-r ${currentMoveCount >= maxRightMoves && "opacity-50 cursor-not-allowed"}`}
                        disabled={currentMoveCount >= maxRightMoves} // Disable button after max moves
                    >
                        →
                    </button>
                </div>
            </div>
            <motion.div
                className="right-image w-auto h-[40vh] flex overflow-x-visible"
                ref={carouselRef}
                drag="x"  // Enabling drag functionality
                dragConstraints={{
                    left: maxRightConstraint,
                    right: 0,
                }}
                animate={{ x: currentPosition }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <AllAboutUs aboutUs={aboutUs} />
            </motion.div>
        </main>
    );
}

export default WhatTheySay;

const AllAboutUs: React.FC<{
    aboutUs:
    {
        name: string;
        quate: string
        image: string;
        company: string
    }[]
}> = ({
    aboutUs,
}) => {
        return (
            <>
                {aboutUs.map((item, index) => (
                    <AboutUsCard
                        key={index}
                        name={item.name}
                        quate={item.quate}
                        image={item.image}
                        company={item.company}
                    />
                ))}
            </>
        );
    };

interface AboutUsCardProps {
    name: string;
    quate: string;
    image: string;
    company: string;
}

const AboutUsCard: React.FC<AboutUsCardProps> = ({ name, quate, image, company }) => {
    return (
        <motion.div
            className="w-[650px] h-[100%] flex-shrink-0 flex items-center p-5"
        >
            <div className="relative rounded-xl overflow-hidden w-[40%] h-[90%]">
                <Image
                    src={image}
                    fill
                    alt={name}
                    className="relative object-cover w-full h-full"
                />
            </div>
            <div className="w-[50%] p-5 h-[100%] flex flex-col justify-between">
                <div className="relative w-fit">
                    <img src="/images/upper.png" alt="" className="mb-2" />
                    <h1 className="text-para leading-6">{quate}</h1>
                    <img src="/images/down.png" className="absolute left-[80%] top-[85%]" alt="" />
                </div>
                <div className="down">
                    <p className="text-paramin leading-5">{name}</p>
                    <p>
                        <span className="text-slate-400 text-min leading-5">{company}</span>
                    </p>
                </div>
            </div>
        </motion.div>
    );
};
