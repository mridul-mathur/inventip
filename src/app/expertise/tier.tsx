import React from 'react';
import TextFormatter from '@/components/text-format';

function tier(data: { title: string, para: string }) {
    return (
        <main className='min-h-[80vh] flex flex-col md:flex-row w-screen'>
            <div className="min-h-[100%] w-[100%] md:w-[70%] flex justify-center items-center">
                <div className="box border h-[60vh] md:min-h-[60%] w-[100%] md:w-[80%] rounded-2xl bg-slate-300">
                </div>
            </div>
            <div className="min-h-[100%] w-[100%] pr-0 md:pr-[70px] flex flex-col justify-center">
                <h1 className='text-head mb-5 mt-5 md:mt-0'><TextFormatter text={ data.title } /></h1>
                <div className="flex flex-col mt-10 ">
                    <TextFormatter text={ data.para } />
                </div>
            </div>
        </main>
    )
}

export default tier