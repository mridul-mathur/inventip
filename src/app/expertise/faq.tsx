import React, { useState } from "react";
import Buttons from "../buttons";

function Faq() {
    return (
        <main className="min-h-[100vh] w-full flex p-16">
            <div className="w-[100%] h-[100%] px-10 pt-[5%]">
                <h1 className="text-head">To ask? We may already have an answer.</h1>
                <div className="flex justify-between items-center mt-[10%] pr-10">
                    <p className="text-para leading-6">Is your question not listed?</p>
                    <div className="px-5 py-1 rounded-2xl bg-black">
                        <Buttons color="#ffff">Contact</Buttons>
                    </div>
                </div>
            </div>
            <div className="w-[100%] min-h-[100%] p-2 pt-[5%]">
                <AllFaq />
            </div>
        </main>
    );
}

export default Faq;

const AllFaq = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(1); // Index of the currently open FAQ

    const Faqquestion = [
        {
            ques: "How is the area calculated?",
            ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor in.",
        },
        {
            ques: "Is there an Owners Association?",
            ans: "Yes, there is an active and mandatory Owners Association, which ensures good building insurance, a multi-year maintenance plan, and management of the manager. An active homeowners association ensures that the site is well maintained and that the site always looks neat.",
        },
        {
            ques: "What are the monthly homeowners association costs?",
            ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor in.",
        },
        {
            ques: "What is the location of an air conditioning unit?",
            ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor in.",
        },
        {
            ques: "Is there building insurance?",
            ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor in.",
        },
    ];

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index); // Toggle open/close
    };

    return (
        <>
            {Faqquestion.map((item, index) => (
                <FaqCard
                    key={index}
                    ques={item.ques}
                    ans={item.ans}
                    isOpen={openIndex === index}
                    onClick={() => handleToggle(index)}
                />
            ))}
        </>
    );
};

interface FaqCardProps {
    ques: string;
    ans: string;
    isOpen: boolean;
    onClick: () => void;
}

const FaqCard: React.FC<FaqCardProps> = ({ ques, ans, isOpen, onClick }) => {
    return (
        <div
            className="border-b-[0.5px] border-black p-5 flex flex-col cursor-pointer"
            onClick={onClick}
        >
            <div className="flex justify-between items-center">
                <h2 className="text-para">{ques}</h2>
                <span className="text-lg">{isOpen ? "➖" : "➕"}</span>
            </div>
            <div
                className={`overflow-hidden transition-all duration-800 ease-in-out ${isOpen ? "max-h-[200px] mt-2" : "max-h-0"
                    }`}
            >
                <p className="text-paramin text-[#888888]">{ans}</p>
            </div>
        </div>
    );
};
