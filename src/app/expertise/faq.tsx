import React, { useState } from "react";
import Buttons from "../buttons";

interface FaqProps {
  faqs: {
    question: string;
    answer: string;
  }[];
}

function Faq({ faqs }: FaqProps) {
  return (
    <main className="min-h-[75vh] w-screen flex flex-col md:flex-row p-4 md:p-16">
      <div className="w-[100%] h-[100%] px-0 md:px-10 pt-[5%]">
        <h1 className="text-head">To ask? We may already have an answer.</h1>
        <div className="flex justify-between items-center mt-[10%] pr-10">
          <p className="text-para leading-6">Is your question not listed?</p>
          <div className="px-5 py-1 rounded-2xl bg-black">
            <Buttons
              color="light"
              onClick={() => (window.location.href = "/contact")}
              underline={true}
              arrow={true}
            >
              Contact
            </Buttons>
          </div>
        </div>
      </div>
      <div className="w-[100%] min-h-[100%] p-2 pt-[5%]">
        <AllFaq faqs={faqs} />
      </div>
    </main>
  );
}

export default Faq;

interface AllFaqProps {
  faqs: {
    question: string;
    answer: string;
  }[];
}

const AllFaq = ({ faqs }: AllFaqProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {faqs.map((item, index) => (
        <FaqCard
          key={index}
          ques={item.question}
          ans={item.answer}
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
        <h2 className="text-para leading-[1.5rem] md:leading-normal">{ques}</h2>
        <span className="text-lg">{isOpen ? "➖" : "➕"}</span>
      </div>
      <div
        className={`overflow-hidden transition-all duration-800 ease-in-out ${
          isOpen ? "max-h-[200px] mt-2" : "max-h-0"
        }`}
      >
        <p className="text-paramin text-[#888888]">{ans}</p>
      </div>
    </div>
  );
};
