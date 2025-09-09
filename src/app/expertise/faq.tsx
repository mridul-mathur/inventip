import React, { useState } from 'react';
import Buttons from '../buttons';

interface FaqProps {
  faqs: {
    question: string;
    answer: string;
  }[];
}

function Faq({ faqs }: FaqProps) {
  return (
    <main className="flex min-h-[75vh] w-screen flex-col gap-12 p-4 md:flex-row md:p-16">
      <div className="sticky top-6 h-[100%] w-full p-0 pt-[5%]">
        <h1 className="text-head">To ask? We may already have an answer.</h1>
        <div className="mt-6 flex items-center justify-between">
          <p className="text-para">Is your question not listed?</p>
          <div className="rounded-2xl bg-black px-5 py-1">
            <Buttons
              color="light"
              onClick={() => (window.location.href = '/contact')}
              underline={true}
              arrow={true}
            >
              Contact
            </Buttons>
          </div>
        </div>
      </div>
      <div className="min-h-[100%] w-full p-0 pt-[5%]">
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
      className="flex cursor-pointer flex-col border-b-[0.5px] border-black p-5"
      onClick={onClick}
    >
      <div className="flex items-center justify-between">
        <h2 className="font-suisse text-2xl leading-[150%]">{ques}</h2>
        <span className="text-lg">{isOpen ? '➖' : '➕'}</span>
      </div>
      <div
        className={`duration-800 overflow-hidden transition-all ease-in-out ${
          isOpen ? 'mt-2 max-h-[200px]' : 'max-h-0'
        }`}
      >
        <p className="text-justify text-para text-[#888888]">{ans}</p>
      </div>
    </div>
  );
};
