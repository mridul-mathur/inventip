import React from "react";

function Hero() {
  return (
    <main className="min-h-screen ">
      <div className="mt-[15vh] sm:mt-[20vh] flex flex-col items-center justify-center">
        <h1 className="text-max font-semibold sm:text-max text-center">
          InventIP: Today's Lab, Tomorrow's Landscape
        </h1>
        <div className="w-[90vw] min-h-[70vh] bg-slate-300 mt-10 rounded-[2.5rem]"></div>
      </div>
    </main>
  );
}

export default Hero;
