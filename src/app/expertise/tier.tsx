import React from "react";
import TextFormatter from "@/components/text-format";

function tier(data: { title: string; para: string; image: string }) {
  return (
    <main className="min-h-[80vh] h-fit flex flex-col items-center justify-center md:flex-row w-screen">
      <div className="min-h-[100%] w-[100%] md:w-[70%] h-fit flex justify-center items-center">
        <div className="box border h-[60vh] md:min-h-[60%] relative overflow-hidden w-[100%] md:w-[80%] rounded-2xl bg-slate-300">
          <img
            src={data.image}
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
      <div className="min-h-[100%] w-[100%] md:pr-[70px] flex flex-col justify-start">
        <h1 className="text-head mb-5 mt-5 md:mt-0">
          <TextFormatter text={data.title} />
        </h1>
        <div className="flex flex-col mt-10 text-justify text-para">
          <TextFormatter text={data.para} />
        </div>
      </div>
    </main>
  );
}

export default tier;
