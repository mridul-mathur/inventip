import React, { useState } from "react";
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

    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const handleNextSlide = (): void => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length); // Loop back to the first slide
    };

    return (
        <main className="h-screen w-screen bg-white flex p-16" onClick={handleNextSlide}>

            <div className="w-full h-full p-4 flex flex-col justify-evenly space-y-8">
                <h1 className="text-head capitalize">
                    These are our expertise where we stand for you and with you
                </h1>


                <div className="overflow-hidden ">
                    <motion.h2
                        className="text-subhead capitalize  "
                        key={`subtitle-${currentIndex}`}
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 50, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {slides[currentIndex].subtitle}
                    </motion.h2>

                </div>


                <div className="overflow-hidden ">
                <motion.p
                    className="py-4 w-80 text-gray-700	text-para leading-6"
                    key={`para-${currentIndex}`}
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 50, opacity: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {slides[currentIndex].para}
                </motion.p>
                </div>


                <motion.div
                    key={`button-${currentIndex}`}
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 50, opacity: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Buttons color="#191919">
                        {slides[currentIndex].buttonText}
                    </Buttons>
                </motion.div>
            </div>


            <div className="w-full h-full flex justify-center items-center">
                <div className="h-[90%] w-[80%] rounded-[3rem] overflow-hidden bg-slate-300 relative">

                    <motion.div
                        className="absolute w-full h-full"
                        animate={{ y: `-${currentIndex * 100}%` }}
                        transition={{ duration: 0.8, ease: "easeInOut"  }}
                    >
                        {slides.map((slide, index) => (
                            <img
                                key={`img-${index}`}
                                src={slide.img}
                                alt={`Slide ${index + 1}`}
                                className="h-full w-full object-cover"
                            />
                        ))}
                    </motion.div>

                    {/*  */}

    



                </div>
            </div>
        </main>
    );
};

export default Inovation;

