
"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

interface Slide {
    subtitle: string;
    para: string;
    img: string;
}

const Certified: React.FC = () => {
    const slides: Slide[] = [
        {
            subtitle: "Industry Certification A",
            para: "There comes some lines about the current certificate which is showing at the rightmost part and some more lines will come here regarding it.",
            img: "https://i.pinimg.com/control2/736x/39/80/16/3980164e1d092aed57c619b854d3e72e.jpg",
        },
        {
            subtitle: "Industry Certification B",
            para: "There comes some lines about the current certificate which is showing at the rightmost part and some more lines will come here regarding it.",
            img: "https://i.pinimg.com/736x/38/bf/5a/38bf5acc0e4a38da034b516009ad5fec.jpg",
        },
        {
            subtitle: "Industry Certification C",
            para: "There comes some lines about the current certificate which is showing at the rightmost part and some more lines will come here regarding it.",
            img: "https://i.pinimg.com/736x/dc/dd/a9/dcdda91488940560786283b38213ec6b.jpg",
        },
        {
            subtitle: "Industry Certification D",
            para: "There comes some lines about the current certificate which is showing at the rightmost part and some more lines will come here regarding it.",
            img: "https://i.pinimg.com/736x/74/05/09/74050921771c3359416531919ec211c9.jpg",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const rightImageRef = useRef<HTMLDivElement | null>(null);

    const handleNextSlide = (): void => {
        const nextIndex = (currentIndex + 1) % slides.length;
        setCurrentIndex(nextIndex);

        const rightImageContainer = rightImageRef.current;
        if (rightImageContainer) {
            const targetImage = rightImageContainer.children[nextIndex] as HTMLElement;
            targetImage?.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
        }
    };

    return (
        <main
            className="min-h-[90vh] w-screen bg-white flex flex-col md:flex-row p-4 md:p-16 overflow-hidden z-[1]"
            onClick={handleNextSlide}
        >
            <div className="left-detail w-full md:w-[50%] flex flex-col justify-evenly gap-5 md:gap-0 pl-2">
                <h1 className="text-head capitalize">
                    We are certified best in the industry
                </h1>
                <motion.div
                    key={`subtitle-${currentIndex}`}
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 50, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-subhead">{slides[currentIndex].subtitle}</h2>
                </motion.div>
                <motion.div
                    key={`para-${currentIndex}`}
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 50, opacity: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-para leading-6">{slides[currentIndex].para}</p>
                </motion.div>
            </div>
            <div
                className="right-image h-[80vh] w-full md:w-[80%] flex items-center p-4 md:p-12 gap-x-4 overflow-x-scroll scrollbar-none mx-2 md:mx-5"
                ref={rightImageRef}
            >
                {slides.map((slide, index) => (
                    <div
                        key={`container-${index}`}
                        className="relative h-[80%] min-w-[280px] m-5 flex-shrink-0"
                    >
                        <motion.div
                            key={`image-${index}`}
                            className={`h-full w-full border rounded-[2rem] overflow-hidden ${currentIndex === index
                                ? "scale-110 bg-gray-300"
                                : "bg-white"
                                }`}
                            initial={{
                                scale: currentIndex === index ? 1 : 0.9,
                                x: currentIndex === index ? 0 : -50,
                            }}
                            animate={{
                                scale: currentIndex === index ? 1.2 : 0.9,
                                x: 0,
                            }}
                            transition={{ duration: 0.5 }}
                        >
                            <img
                                src={slide.img}
                                alt={slide.subtitle}
                                className="w-full h-full object-cover rounded-[2rem]"
                            />
                        </motion.div>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Certified;



