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
    <article className="relative flex h-fit max-h-[30rem] flex-col gap-6 overflow-hidden rounded-lg border border-secondary bg-primary p-2 duration-200 md:p-4">
      <header>
        <h3 className="font-suisse text-2xl font-medium md:text-subheadmin">
          {position || 'No Position'}
        </h3>
      </header>
      <section className="grid gap-2 text-para text-secondary/80">
        <Info label="Location" value={location} />
        <Info label="Duration" value={duration} />
        <Info label="Pay" value={pay} />
        <Info
          label="Skills"
          value={skills.length ? skills.join(', ') : 'N/A'}
        />
      </section>

      <footer className="absolute bottom-0 left-0 z-10 flex w-full flex-col items-center justify-between bg-primary">
        <hr className="h-[2px] w-full bg-gradient-to-r from-accent1 to-accent2" />
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
