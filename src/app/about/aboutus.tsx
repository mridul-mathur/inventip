import React from 'react'

function aboutus() {
    return (
        <main className='min-h-[90vh] w-full p-4 sm:p-16'>
            <div className=" w-full ">
                <h1 className='text-subhead pb-5 sm:pt-0 '>About us</h1>
            </div>
            <div className="flex w-full items-center gap-12 flex-row">
                <div className="box min-h-[60vh] w-2/5 border rounded-3xl bg-slate-300">
                </div>
                <div className="text-pretty detail w-3/5 text-lg py-5 flex flex-col justify-evenly">
                    <p>
                        InventIP is at the forefront of intellectual property intelligence and innovation
                        strategy, empowering businesses to unlock the full potential of their ideas through
                        advanced patent analytics and technology insights. We specialize in transforming
                        complex IP data into actionable strategies, offering deep-dive patent searches,
                        competitive landscape analysis, and whitespace mapping to identify untapped
                        opportunities and emerging trends. Our expertise lies in decoding market dynamics,
                        forecasting technological shifts, and aligning R&amp;D efforts with commercial
                        goals—turning raw data into a roadmap for growth.
                    </p>
                    <br />
                    <p>
                        Backed by a multidisciplinary team of technical analysts and industry experts, we
                        deliver precision and depth in every project. From optimizing IP portfolios to scouting
                        disruptive innovations, our methodologies bridge the gap between research and real-
                        world impact. We combine cutting-edge tools with domain-specific knowledge to help
                        you navigate fast-evolving tech ecosystems, mitigate risks, and capitalize on high-
                        value breakthroughs.
                    </p>
                    <br />
                    <p>
                        At InventIP, we don't just analyze patents—we architect innovation pathways.
                        Partner with us to transform intellectual assets into strategic advantages, backed by
                        insights that drive smarter decisions, foster collaboration, and position your business
                        at the forefront of tomorrow's breakthroughs.
                    </p>
                </div>
            </div>
        </main>
    )
}

export default aboutus