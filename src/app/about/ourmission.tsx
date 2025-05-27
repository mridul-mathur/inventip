import React, { useEffect, useState } from 'react'
import TextFormatter from '@/components/text-format';

interface AboutMissionContent {
    title: string;
    text1: string;
    text2: string;
    image: string;
}

function ourmission() {
    const [content, setContent] = useState<AboutMissionContent | null>(null);

    useEffect(() => {
        fetch('/content/content.json')
            .then(response => response.json())
            .then(data => setContent(data.About.mission))
            .catch(error => console.error('Error fetching content:', error));
    }, []);
    return (
        <main className='min-h-[100vh] border w-full  p-4 sm:p-16'>
            <div className=" w-full">
                <h1 className='text-subhead'> <TextFormatter text={ content?.title || '' } /></h1>
            </div>
            <div className="flex min-h-auto w-full mt-8 flex-col p-2 sm:flex-row">
                <div className=" h-auto w-full pr-0 pt-10 sm:pr-20">
                    <p className='text-para leading-6'>
                        <TextFormatter text={ content?.text1 || '' } />
                    </p>
                </div>
                <div className="  min-h-auto w-[100%]  pl-0 pt-10 p-2 sm:pl-20 ">
                    <p className='text-para leading-6'>
                        <TextFormatter text={ content?.text2 || '' } />
                    </p>
                </div>
            </div>
            <div className="w-full min-h-[50vh] sm:min-h-[40vh] border mt-[50px] bg-slate-300 rounded-[2rem]"></div>
        </main>
    )
}

export default ourmission