"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function WhatTheySay() {
    return (
        <main className="h-[60vh] w-screen bg-white p-16 overflow-hidden">
            <div className="w-auto mb-5">
                <h1 className="text-head capitalize">what they say about us</h1>
            </div>
            <motion.div
                className="right-image w-auto h-[40vh] flex overflow-x-visible"
                drag="x"
                // custom karna ha isko 1 card ka 500 ha
                dragConstraints={{ left: -1500, right: 0 }} // Adjust constraints as needed
            >
                <AllAboutUs />
            </motion.div>
        </main>
    );
}

export default WhatTheySay;

const AllAboutUs = () => {
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
            name: "Technology",
            quate: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor in ",
            image: "/images/img.png",
            company: "TechCorp.Lcc",
        },
        {
            name: "Technology",
            quate: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor in ",
            image: "/images/img.png",
            company: "TechCorp.Lcc",
        },
     
     
       
    ];

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
            className="w-[50%] h-[100%] flex-shrink-0 flex items-center p-5"
            whileHover={{ scale: 1.05 }} // Optional hover animation
            whileTap={{ scale: 0.95 }} // Optional tap animation
        >
            <div className="relative rounded-xl overflow-hidden w-[40%] h-[90%]">
                <Image
                    src={image}
                    fill
                    alt={name}
                    className="relative object-cover w-full h-full"
                />
            </div>
            <div className="w-[50%] p-5 h-[100%] flex flex-col justify-evenly">
                <h1>{quate}</h1>
                <div className="down">
                    <p>{name}</p>
                    <p>
                        <span>{company}</span>
                    </p>
                </div>
            </div>
        </motion.div>
    );
};


