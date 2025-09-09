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
      .then(response => response.json())
      .then(data => {
        console.log('About hero data:', data.About.hero);
        setContent(data.About.hero);
      })
      .catch(error => console.error('Error fetching content:', error));
  }, []);

  return (
    <div className="relative flex h-full max-h-screen w-full flex-col items-center justify-center px-4 pb-12 pt-24 sm:px-16">
      <h1 className="text-center text-5xl font-semibold sm:text-5xl md:text-6xl lg:text-max">
        {content?.title}
      </h1>
      <div className="relative mt-10 aspect-[2/1] h-full w-full overflow-hidden rounded-[2.5rem] bg-slate-300">
        {content?.image && (
          <img
            src={content.image}
            alt="About Hero"
            className="h-full w-full object-cover"
            onLoad={() => setImageLoaded(true)}
            onError={e => {
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
