
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Buttons from "../buttons";

const Inovation: React.FC = () => {
    const slides = [
        {
            subtitle: "Open Innovation",
            para: "We look beyond conventional search strategies and work in a collaborative manner to generate actionable and practicable innovation, whereby we not only share the analysis and methodology but also keep the clients informed with interim updates and share sample output.",
            img: "https://i.pinimg.com/736x/a2/b2/a1/a2b2a198e6de398b462ad29b0151c5ab.jpg",
            buttonText: "View Open Innovation",
        },
        {
            subtitle: "IP Research",
            para: "We support global businesses in informed decision-making with respect to their potential IP investments, help them avoid running into troubled waters by safeguarding from potential invalidity/ infringement challenges, and partner with them to identify potential monetization opportunities.",
            img: "https://i.pinimg.com/736x/cb/36/d7/cb36d7a621d6e0f9ae8ee80a7efdc0e1.jpg",
            buttonText: "Explore IP Research",
        },
        {
            subtitle: "IP Strategy",
            para: "Creation of IP necessitates subsequent enforcement and ensuring sanctity of IP rights. At the same time, evaluating and subsequently adhering to IP boundaries set by competitors is equally important. Our strategic advisory is always in alignment with the commercial requirements of our clients.",
            img: "https://i.pinimg.com/736x/4a/fb/4a/4afb4af9accbb57272dae6761cc0d8aa.jpg",
            buttonText: "Discover IP Strategy",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const { top, bottom, height } = sectionRef.current.getBoundingClientRect();
                const sectionHeight = window.innerHeight;

                // Check if the middle of the section is within the viewport
                const middleOfSection = top + height / 2;
                if (middleOfSection >= 0 && middleOfSection <= sectionHeight) {
                    const activeIndex = Math.floor((middleOfSection / sectionHeight) * slides.length);
                    setCurrentIndex(activeIndex);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [slides.length]);

    const textVariants = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 50 },
    };

    const imageVariants = {
        initial: { opacity: 0, y: -200 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 200 },
    };

    return (
        <div
            ref={sectionRef}
            className="relative w-screen bg-white"
            style={{
                height: `${slides.length * 100}vh`,
                transition: "background-color 0.5s ease ",
            }}
        >

            <motion.div className="h-screen  sticky top-0 right-0 flex flex-col md:flex-row justify-between items-center p-4 lg:p-28">
                <div className="w-full h-[80vh] md:w-[45%] space-y-8">
                    <motion.h1
                        className="text-head capitalize"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        These are our expertise where we stand for you and with you
                    </motion.h1>

                    <motion.h2
                        className="text-subhead capitalize"
                        key={`subtitle-${currentIndex}`}
                        variants={textVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    >
                        {slides[currentIndex]?.subtitle}
                    </motion.h2>

                    <motion.p
                        className="py-4 w-80 text-gray-700 text-para leading-6"
                        key={`para-${currentIndex}`}
                        variants={textVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    >
                        {slides[currentIndex]?.para}
                    </motion.p>

                    <motion.div
                        key={`button-${currentIndex}`}
                        variants={textVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    >
                        <Buttons color="#191919">
                            {slides[currentIndex]?.buttonText}
                        </Buttons>
                    </motion.div>
                </div>

                <div className="w-full md:w-[40%] h-[75vh] rounded-[3rem] overflow-hidden">
                    <motion.img
                        src={slides[currentIndex]?.img}
                        alt={`Slide ${currentIndex}`}
                        className="h-full w-full object-cover"
                        key={`img-${currentIndex}`}
                        variants={imageVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default Inovation;
