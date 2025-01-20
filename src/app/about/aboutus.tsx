import React from 'react'

function aboutus() {
    return (
        <main className='min-h-[90vh] w-full p-4 sm:p-16'>
            <div className=" w-full ">
                <h1 className='text-subhead pb-5 sm:pt-0 '>About us</h1>
            </div>
            <div className="flex min-h-[70vh] w-full items-center flex-col sm:flex-row">
            <div className="box min-h-[60vh] w-full sm:w-[60%] border rounded-3xl bg-slate-300">

                </div>
                <div className="detail min-h-[55vh] w-full px-4 py-5 sm:px-12 flex flex-col justify-evenly">
                    <p className='text-para leading-6'>InventIP is an India based Tier 1 Intellectual Property law firm that provides
                        a wide range of IP services to clients across the globe with primary competencies
                        in preparation, filing, and prosecution of Patents, Designs, Trademark and Copyrights.
                        InventIP also helps clients in formulating IP strategy,
                        facilitating technology commercialization, providing technology and commercial insights
                        through focused patent search and analytics, performing IP audits, and providing IP
                        management support. Additionally, InventIP provides
                        legal advisory on technology law and related commercial agreements.
                    </p>
                    <p className='text-para leading-6 pt-10 sm:pt-0'>With dynamic, seasoned and qualified team backed by rigorous and robust quality
                        control processes, we offer unmatched services and tactical strategies ensuring optimum
                        utilization of client's cost and time. Through our years of experience in the field of
                        IP, we have built reliable relationships with quality patent attorneys and agents across
                        the globe. We therefore have
                        the capability to facilitate IP filing and prosecution across multiple jurisdictions.</p>

                </div>

            </div>

        </main>
    )
}

export default aboutus