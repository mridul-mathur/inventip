'use client';

import React from 'react';
import { ExternalLink } from 'lucide-react';
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
    <article
      className='
        relative flex flex-col h-fit overflow-hidden gap-6 max-h-[30rem] rounded-lg border border-secondary bg-primary p-2 md:p-4 duration-200'
    >
      <header>
        <h3 className='text-2xl font-suisse md:text-subheadmin font-medium'>
          {position || 'No Position'}
        </h3>
      </header>
      <section className='grid gap-2 text-para text-secondary/80'>
        <Info label='Location' value={location} />
        <Info label='Duration' value={duration} />
        <Info label='Pay' value={pay} />
        <Info
          label='Skills'
          value={skills.length ? skills.join(', ') : 'N/A'}
        />
      </section>

      <footer className='z-10 absolute left-0 bottom-0 bg-primary  flex flex-col w-full items-center justify-between'>
        <hr className='w-full h-[2px] bg-gradient-to-r from-accent1 to-accent2' />
        <Buttons
          color='dark'
          underline
          onClick={() => (window.location.href = file_url || '#')}
        >
          Description PDF
        </Buttons>
        <Buttons
          color='dark'
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
      <span className='font-medium h-full truncate text-secondary'>
        {label}:
      </span>{' '}
      <span className='line-clamp-4'>{value || 'N/A'}</span>
    </p>
  );
}
