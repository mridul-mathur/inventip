import React, { useEffect, useState } from 'react';

interface AboutHeroContent {
  title: string;
  image: string;
}
function Hero() {
  const [content, setContent] = useState<AboutHeroContent | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    fetch('/content/content.json')
      .then((response) => response.json())
      .then((data) => {
        console.log('About hero data:', data.About.hero);
        setContent(data.About.hero);
      })
      .catch((error) => console.error('Error fetching content:', error));
  }, []);

  return (
    <div className='max-h-screen pt-24 pb-12 sm:px-16 px-4 flex flex-col items-center justify-center h-full relative w-full'>
      <h1 className='lg:text-max font-semibold text-5xl sm:text-5xl md:text-6xl text-center'>
        {content?.title}
      </h1>
      <div className='w-full h-full overflow-hidden relative bg-slate-300 mt-10 rounded-[2.5rem] aspect-[2/1]'>
        {content?.image && (
          <img
            src={content.image}
            alt='About Hero'
            className='w-full h-full object-cover'
            onLoad={() => setImageLoaded(true)}
            onError={(e) => {
              console.error('Image failed to load:', content.image);
              console.error('Error:', e);
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Hero;
