import React, { useState, useEffect } from 'react';
import { MdMarkEmailUnread } from 'react-icons/md';
import { IoLogoLinkedin } from 'react-icons/io5';
import TextFormatter from '@/components/text-format';

interface AboutTeamContent {
  title: string;
  cards: TeamCardProps[];
}

function Team() {
  const [content, setContent] = useState<AboutTeamContent | null>(null);

  useEffect(() => {
    fetch('/content/content.json')
      .then((response) => response.json())
      .then((data) => setContent(data.About.our_team))
      .catch((error) => console.error('Error fetching content:', error));
  }, []);
  return (
    <main className='h-[100%] w-full p-4 sm:p-16'>
      <div className='w-full'>
        <h1 className='text-head text-center w-full'>
          <TextFormatter text={content?.title || ''} />
        </h1>
      </div>
      <div className='w-full flex flex-wrap mt-[50px] gap-10 '>
        <TeamCards team={content?.cards} />
      </div>
    </main>
  );
}

export default Team;

interface TeamCardProps {
  name: string;
  image: string;
  position: string;
  li?: string;
  mail?: string;
}

const TeamCards: React.FC<{ team?: TeamCardProps[] }> = ({ team }) => {
  if (!team) return null;
  return (
    <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
      {team.map((item, index) => (
        <TeamCade
          key={index}
          name={item.name}
          position={item.position}
          image={item.image}
          li={item.li}
          mail={item.mail}
        />
      ))}
    </div>
  );
};

const TeamCade: React.FC<TeamCardProps> = ({
  name,
  position,
  image,
  li,
  mail,
}) => {
  return (
    <>
      <div className='card border aspect-[3/5] w-full rounded-3xl relative overflow-hidden group'>
        <img src={image} alt='' className='h-[100%] object-cover w-full' />
        <div className='h-[8rem] w-full border-t absolute bottom-0 rounded-xl bg-black/50 backdrop-blur-[2px] flex shadow-inner'>
          <div className='name h-[100%] w-[100%] text-primary flex flex-col justify-start pl-3 py-3'>
            <h1 className='lg:text-xl md:text-base text-base font-bold'>
              {name}
            </h1>
            <p className='font-medium lg:text-paramin sm:text-[13px] text-[12px]'>
              <TextFormatter text={position} />
            </p>
          </div>
          {mail && li && (
            <div className='h-[100%] w-fit px-2 justify-end flex lg:gap-3 gap-2 items-center'>
              <a
                href={`https://outlook.live.com/mail/0/deeplink/compose?to=${mail}&subject=Hello&body=Message%20text`}
                target='_blank'
                rel='noopener noreferrer'
                className='aspect-square h-10 w-10 p-3 overflow-hidden border lg:opacity-0 transition-opacity duration-1000 group-hover:opacity-100 rounded-md flex items-center justify-center'
              >
                <img
                  src='/images/mail.png'
                  alt={`Send mail to ${name}`}
                  className='text-primary overflow-hidden lg:translate-y-[100%] transition-transform duration-1000 object-cover group-hover:translate-y-0'
                />
              </a>
              <a
                href={li}
                target='_blank'
                rel='noopener noreferrer'
                className='aspect-square h-10 w-10 p-3 overflow-hidden border lg:opacity-0 transition-opacity duration-1000 group-hover:opacity-100 rounded-md flex items-center justify-center'
              >
                <img
                  src='/images/link.png'
                  alt=''
                  className='text-primary overflow-hidden lg:translate-y-[100%] transition-transform duration-1000 group-hover:translate-y-0'
                />
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
