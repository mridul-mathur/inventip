import React from 'react'

function hero() {
    return (
        <main className='min-h-[100vh]  w-full p-5 md:p-16 md:pr-0 flex flex-col md:flex-row'>
            <div className=" min-h-[100%] w-[100%] pt-[70px]">
                <h1 className='text-head md:text-max'>Some lines about <br />
                    every expertise</h1>
                <p className='mt-5 text-para leading-6'>here comes some more lines about the brief of this <br /> particular expertise</p>

            </div>
            <div className=" min-h-[100%] w-[100%] flex justify-end">
            <div className="h-[60vh] md:min-h-[100%] w-[100%] md:w-[90%] border rounded-l-[2rem] bg-slate-300 mt-[30px] md:mt-0">

                </div>

            </div>
        </main>
    )
}

export default hero