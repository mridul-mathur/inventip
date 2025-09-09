import React from 'react';
import TextFormatter from '@/components/text-format';

function tier(data: { title: string; para: string; image: string }) {
  return (
    <main className="flex h-fit min-h-[80vh] w-screen flex-col items-center justify-center md:flex-row">
      <div className="flex h-fit min-h-[100%] w-[100%] items-center justify-center md:w-[70%]">
        <div className="box relative h-[60vh] w-[100%] overflow-hidden rounded-2xl border bg-slate-300 md:min-h-[60%] md:w-[80%]">
          <img
            src={data.image}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
      <div className="flex min-h-[100%] w-[100%] flex-col justify-start md:pr-[70px]">
        <h1 className="mb-5 mt-5 text-head md:mt-0">
          <TextFormatter text={data.title} />
        </h1>
        <div className="mt-10 flex flex-col text-justify text-para">
          <TextFormatter text={data.para} />
        </div>
      </div>
    </main>
  );
}

export default tier;
