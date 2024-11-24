"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function WhatTheySay() {
    const cardWidth = 600; // Width of one card in pixels
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

    const totalCards = aboutUs.length; // Calculate total cards dynamically
    const viewportWidth = 1000; // Approximate viewport width in pixels
    const dragLeftConstraint = -(cardWidth * totalCards - viewportWidth); // Calculate left constraint dynamically

    return (
        <main className="h-[60vh] w-screen bg-white p-16 overflow-hidden">
            <div className="w-auto mb-5">
                <h1 className="text-head capitalize">what they say about us</h1>
            </div>
            <motion.div
                className="right-image w-auto h-[40vh] flex overflow-x-visible"
                drag="x"
                dragConstraints={{ left: dragLeftConstraint, right: 0 }} // Dynamically calculated constraints
            >
                <AllAboutUs aboutUs={aboutUs} />
            </motion.div>
        </main>
    );
}

export default WhatTheySay;

const AllAboutUs: React.FC<{ aboutUs: { name: string; quate: string; image: string; company: string }[] }> = ({
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
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }} 
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



