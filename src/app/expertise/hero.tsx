import React from 'react'

function hero() {
    return (
        <main className='min-h-[100vh] border w-full p-16 pr-0 flex'>
            <div className=" min-h-[100%] w-[100%] pt-[70px]">
                <h1 className='text-max'>Some lines about <br />
                    every expertise</h1>
                <p className='mt-5'>here comes some more lines about the brief of this <br /> particular expertise</p>

            </div>
            <div className=" min-h-[100%] w-[100%] flex justify-end">
                <div className="min-h-[100%] w-[90%] border rounded-l-[2rem] bg-slate-300">

                </div>

            </div>
        </main>
    )
}

export default hero