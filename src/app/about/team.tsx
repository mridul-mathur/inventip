import React from 'react';
import { MdMarkEmailUnread } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io5";

function team() {
    return (
        <main className="h-[100%] w-full p-16">
            <div className="w-full">
                <h1 className="text-head">Meet the people <br /> behind inventIP</h1>
            </div>
            <div className="w-full flex flex-wrap mt-[50px] gap-5 ">
                <Team />
            </div>
        </main>
    );
}

export default team;

const Team = () => {
    const teamData = [
        { name: 'John Doe', role: 'Frontend Developer', linkedin: '', mail: 'john@example.com', image: 'https://i.pinimg.com/736x/99/47/62/9947620a91a1e2c6f74b4711066941ae.jpg' },
        { name: 'Jane Smith', role: 'Backend Developer', linkedin: '', mail: 'jane@example.com', image: 'https://i.pinimg.com/736x/93/e7/62/93e7624c45f4631b8ca7568a7509bd99.jpg' },
        { name: 'Alex Johnson', role: 'Designer', linkedin: '', mail: 'alex@example.com', image: 'https://i.pinimg.com/736x/bd/c7/b8/bdc7b856ff45d369b620d8ca33d2d024.jpg' },
        { name: 'John Doe', role: 'Frontend Developer', linkedin: '', mail: 'john@example.com', image: 'https://i.pinimg.com/736x/51/34/b5/5134b558e3098fbf546905496a6922ac.jpg' },
        { name: 'Jane Smith', role: 'Backend Developer', linkedin: '', mail: 'jane@example.com', image: 'https://i.pinimg.com/736x/f1/4a/17/f14a174aa04589fffad68c526779eb7d.jpg' },

    ];

    return (
        <>
            {teamData.map((item, index) => (
                <TeamCade
                    key={index}
                    name={item.name}
                    role={item.role}
                    image={item.image}
                    linkedin={item.linkedin}
                    mail={item.mail}
                />
            ))}
        </>

    );
};

interface TeamCardProps {
    name: string;
    role: string;
    linkedin: string;
    mail: string;
    image: string;
}

const TeamCade: React.FC<TeamCardProps> = ({ name, role, image, linkedin, mail }) => {
    return (
        <>
            <div className="card border h-[500px] w-[410px] rounded-3xl relative overflow-hidden group">
                <img src={image} alt="" className="h-[100%] w-full" />
                <div className="h-[20%] w-full border absolute bottom-0 rounded-xl backdrop-blur-[2px] flex">
                    <div className="name h-[100%] w-[100%] text-white flex flex-col justify-evenly p-4">
                        <h1 className="text-2xl font-bold">{name}</h1>
                        <p className="font-thin text-sm">{role}</p>
                    </div>
                    <div className="link h-[100%] w-[70%] flex gap-2 items-center">
                        <div className="ixon-box h-[50%] w-[35%] border opacity-0 transition-opacity duration-1000 group-hover:opacity-100 rounded-md flex items-center justify-center">
                            <MdMarkEmailUnread  className='text-white text-xl overflow-hidden' />

                        </div>
                        <div className="ixon-box h-[50%] w-[35%] border opacity-0 transition-opacity duration-1000 group-hover:opacity-100 rounded-md flex items-center justify-center">
                            <IoLogoLinkedin className='text-white text-xl overflow-hidden   ' />

                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};
