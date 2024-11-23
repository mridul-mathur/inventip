import React from 'react'

function aboutus() {
    return (
        <main className='h-[90vh] w-full  p-16'>
            <div className=" w-full">
                <h1 className='text-subhead'>About us</h1>
            </div>
            <div className=" flex h-full w-full items-center">
                <div className="box h-[80%] w-[60%]  border rounded-3xl bg-slate-200">

                </div>
                <div className="detail  h-[90%] w-[100%] px-12 flex flex-col justify-evenly ">
                    <p>InventIP is an India based Tier 1 Intellectual Property law firm that provides
                        a wide range of IP services to clients across the globe with primary competencies
                        in preparation, filing, and prosecution of Patents, Designs, Trademark and Copyrights.
                        InventIP also helps clients in formulating IP strategy,
                        facilitating technology commercialization, providing technology and commercial insights
                        through focused patent search and analytics, performing IP audits, and providing IP
                        management support. Additionally, InventIP provides
                        legal advisory on technology law and related commercial agreements.
                    </p>
                    <p>With dynamic, seasoned and qualified team backed by rigorous and robust quality
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