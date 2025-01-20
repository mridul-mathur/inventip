import React from "react";

function hero() {
  return (
    <main className="w-screen h-screen p-16 my-[2rem] flex justify-between items-center">
      <div className="h-full w-7/12 flex flex-col">
        <h1 className="text-head md:text-max">
          Some lines about <br />
          every expertise
        </h1>
        <p className="mt-5 text-para leading-6">
          here comes some more lines about the brief of this <br /> particular
          expertise
        </p>
      </div>
      <div className=" h-full w-5/12 flex justify-center items-center">
        <div className="h-full w-full border rounded-[2rem] bg-slate-300"></div>
      </div>
    </main>
  );
}

export default hero;
