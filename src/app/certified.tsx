

import React from 'react';

function Certified() {
    return (
        <main className="h-[100vh] w-screen bg-white flex  p-16">
            <div className="left-detail  h-full w-[50%] flex flex-col justify-evenly pl-2">
                <h1 className="text-head capitalize">
                    We are certified best in the industry
                </h1>
                <h2 className="text-subhead">
                    This is the name of certificate
                </h2>
                <p>
                    There comes some lines about the current certificate which is showing at the rightmost part, and some more lines will come here regarding it.
                </p>
            </div>
            <div className="right-image  h-full w-[100%] flex items-center p-12 gap-x-4 overflow-x-scroll scrollbar-none">
                <div className="h-[90%] min-w-[320px] border border-black rounded-[2rem] flex-shrink-0"></div>
                <div className="h-[90%] min-w-[320px] border border-black rounded-[2rem] flex-shrink-0"></div>
                <div className="h-[90%] min-w-[320px] border border-black rounded-[2rem] flex-shrink-0"></div>
            </div>
        </main>
    );
}

export default Certified;
