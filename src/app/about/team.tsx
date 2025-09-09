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
      .then(response => response.json())
      .then(data => setContent(data.About.our_team))
      .catch(error => console.error('Error fetching content:', error));
  }, []);
  return (
    <main className="h-[100%] w-full p-4 sm:p-16">
      <div className="w-full">
        <h1 className="w-full text-center text-head">
          <TextFormatter text={content?.title || ''} />
        </h1>
      </div>
      <div className="mt-[50px] flex w-full flex-wrap gap-10">
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
    <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
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
      <div className="card group relative aspect-[3/5] w-full overflow-hidden rounded-3xl border">
        <img src={image} alt="" className="h-[100%] w-full object-cover" />
        <div className="absolute bottom-0 flex h-[8rem] w-full rounded-xl border-t bg-black/50 shadow-inner backdrop-blur-[2px]">
          <div className="name flex h-[100%] w-[100%] flex-col justify-start py-3 pl-3 text-primary">
            <h1 className="text-base font-bold md:text-base lg:text-xl">
              {name}
            </h1>
            <p className="text-[12px] font-medium sm:text-[13px] lg:text-paramin">
              <TextFormatter text={position} />
            </p>
          </div>
          {mail && li && (
            <div className="flex h-[100%] w-fit items-center justify-end gap-2 px-2 lg:gap-3">
              <a
                href={`https://outlook.live.com/mail/0/deeplink/compose?to=${mail}&subject=Hello&body=Message%20text`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex aspect-square h-10 w-10 items-center justify-center overflow-hidden rounded-md border p-3 transition-opacity duration-1000 group-hover:opacity-100 lg:opacity-0"
              >
                <img
                  src="/images/mail.png"
                  alt={`Send mail to ${name}`}
                  className="overflow-hidden object-cover text-primary transition-transform duration-1000 group-hover:translate-y-0 lg:translate-y-[100%]"
                />
              </a>
              <a
                href={li}
                target="_blank"
                rel="noopener noreferrer"
                className="flex aspect-square h-10 w-10 items-center justify-center overflow-hidden rounded-md border p-3 transition-opacity duration-1000 group-hover:opacity-100 lg:opacity-0"
              >
                <img
                  src="/images/link.png"
                  alt=""
                  className="overflow-hidden text-primary transition-transform duration-1000 group-hover:translate-y-0 lg:translate-y-[100%]"
                />
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
