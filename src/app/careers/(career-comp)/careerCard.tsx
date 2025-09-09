'use client';

import React from 'react';
import Buttons from '@/app/buttons';

export interface CareerCardProps {
  _id: string;
  position: string;
  location: string;
  duration: string;
  pay: string;
  skills: string[];
  file_url?: string;
}

export default function CareerCard({
  position,
  location,
  duration,
  pay,
  skills,
  file_url,
}: CareerCardProps) {
  return (
    <article className="p-4 relative flex flex-col justify-between h-fit  overflow-hidden rounded-lg border border-secondary bg-primary duration-200">
        <h3 className="font-suisse w-full bg-primary border-b-[1px] pb-4 border-accent2 sticky top-0 text-2xl font-medium mb-4 md:text-3xl">
        {position || 'No Position'}
      </h3>
        <section className="grid grid-cols-4  items-center justify-between gap-2 text-para text-secondary/80">
          <Info label="Location" value={location} />
          <Info label="Duration" value={duration} />
          <span className="col-span-2">
            <Info label="Pay" value={pay} />
          </span>
        </section>
        <span className="text-para font-medium mt-4 text-secondary">
          Skills:{' '}
          <li className="list-disc font-normal inline text-para leading-[100%]">
            {skills.length ? skills.join(' • ') : 'N/A'}
          </li>
        </span>
      <footer className="sticky bottom-0 pt-4 border-t-[1px] border-accent2 left-0 z-10 flex w-full items-center justify-between bg-primary">
        <Buttons
          color="dark"
          underline
          onClick={() => (window.location.href = file_url || '#')}
        >
          Description PDF
        </Buttons>
        <Buttons
          color="dark"
          arrow
          onClick={() =>
            window.open(
              'https://mail.google.com/mail/u/0/?fs=1&to=letstalk@inventip.in.in&su=&body=&tf=cm'
            )
          }
        >
          Apply Now
        </Buttons>
      </footer>
    </article>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <p>
      <span className="h-full truncate font-medium text-secondary">
        {label}:
      </span>{' '}
      <span className="line-clamp-4">{value || 'N/A'}</span>
    </p>
  );
}
