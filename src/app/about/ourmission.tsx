import React from 'react'

function ourmission() {
    return (
        <main className='min-h-[100vh] border w-full  p-4 sm:p-16'>
            <div className=" w-full">
                <h1 className='text-subhead'> Your success our mission</h1>
            </div>
            <div className="flex min-h-auto w-full mt-8 flex-col p-2 sm:flex-row">
            <div className=" h-auto w-full pr-0 pt-10 sm:pr-20">
                <p className='text-para leading-6'>To be valued by our clients for our quality work products and services. We partner
                         with our clients to help navigate the complex maze of IP law and procedures and 
                         provide speedy resolution to their challenges. We are not afraid to take risks,
                          and with mutual collaboration, we endeavour to achieve excellence in both transactional
                           and advisory capacities.</p>

                </div>
                <div className="  min-h-auto w-[100%]  pl-0 pt-10 p-2 sm:pl-20 ">
                    <p className='text-para leading-6'>The firm provides support in a transparent manner with relentless communication and
                         interactions at priority with clients. The firm's technology-driven processes for IP
                          management sets us apart from other firms and help us achieve higher returns for our
                           clients. Our knowledge of the law, along with our strive for perfection,
                         helps our clients to gain implementable solutions to their problems.</p>

                </div>

            </div>
            <div className="w-full min-h-[50vh] sm:min-h-[40vh] border mt-[50px] bg-slate-300 rounded-[2rem]"></div>
        </main>
    )
}

export default ourmission