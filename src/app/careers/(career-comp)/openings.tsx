import React, { useEffect, useState } from 'react';
import Buttons from '@/app/buttons';
import TextFormatter from '@/components/text-format';
import CareerCard from './careerCard';
import { CareerCardProps } from './careerCard';

const JobOpenings = () => {
  const [content, setContent] = useState<any | null>(null);
  const [careers, setCareers] = useState<CareerCardProps[]>([]);
  const [careersLoading, setCareersLoading] = useState<boolean>(false);
  const [careersError, setCareersError] = useState<boolean>(false);

  useEffect(() => {
    fetch('/content/content.json')
      .then(response => response.json())
      .then(data => setContent(data.Careers.benefits))
      .catch(error => console.error('Error fetching content:', error));

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getdata/careers`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        return response.json();
      })
      .then(data => {
        setCareers(data.data);
        setCareersLoading(false);
      })
      .catch(error => {
        setCareersError(error);
        setCareersLoading(false);
      });
  }, []);
  if (!content) return null;
  console.log(careers);
  return (
    <main className="z-[2] flex h-fit w-screen flex-col items-center justify-between gap-16 bg-primary p-4 sm:p-[8rem] sm:py-[4rem]">
      <div className="flex h-fit w-full flex-col items-start justify-center gap-4 sm:flex-row sm:gap-[8rem]">
        <div className="flex h-full w-full flex-col items-start justify-between gap-[2rem] sm:w-2/5">
          <p className="text-head">Career Openings</p>
        </div>
        <div className="flex h-fit w-full flex-col items-start justify-between gap-[4rem] text-justify sm:w-3/5">
          <p className="text-para">
            <TextFormatter text={content?.description || ''} />
          </p>
          <div className="grid w-full grid-cols-1 items-center justify-start gap-16 sm:grid-cols-2">
            {content?.items.map((item: any, idx: number) => (
              <div className="relative flex flex-col gap-1" key={idx}>
                <hr className="absolute -top-4 h-[2px] w-full bg-gradient-to-r from-accent1 to-accent2" />
                <p className="text-para font-semibold">{item.title}</p>
                <span className="text-paramin">{item.description}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {careers.map((career: CareerCardProps, idx: number) => (
          <CareerCard key={career._id || idx} {...career} />
        ))}
      </div>
    </main>
  );
};

export default JobOpenings;
