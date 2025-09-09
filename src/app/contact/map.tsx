'use client';

import React, { useState } from 'react';

// Address Interface
interface Address {
  title: string;
  description: string;
  location: string;
}

// Map Component
const Map: React.FC<{ location: string }> = ({ location }) => {
  return (
    <div className="relative min-h-[70vh] w-full rounded-[3rem] border bg-slate-300">
      <iframe
        src={location}
        width="100%"
        height="100%"
        style={{ border: 0, borderRadius: '2rem', height: '70vh' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

// Address Item Component
const AddressItem: React.FC<{
  title: string;
  description: string;
  location: string;
  onClick: () => void;
}> = ({ title, description, location, onClick }) => {
  return (
    <div
      className="h-fit w-fit cursor-pointer rounded-2xl border bg-primary/50 p-5 backdrop-blur-sm hover:shadow-md"
      onClick={onClick}
    >
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

const MapContainer: React.FC = () => {
  const addresses = [
    {
      title: 'Noida Office:',
      description:
        'InventIP Legal Services LLP Smartworks Corporate Park,Amity Rd, Sector 125, Noida,Uttar Pradesh 201303',
      location:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.7155639401626!2d77.3294234759624!3d28.54826797571097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceea20e74ec33%3A0x61864f3578e4163d!2sInventIP%20Legal%20Services%20LLP!5e0!3m2!1sen!2sin!4v1747821017168!5m2!1sen!2sin',
    },
    {
      title: 'Gurgaon Office',
      description:
        'InventIP Legal Services LLP Unit 629-631, BPTP Park Centra, Jal Vayu Vihar, Sector 30, Gurugram, Haryana 122001',
      location:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1753.8204687307014!2d77.04915446513134!3d28.4602384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d185725ac0001%3A0xb47ce3f07f09ed6!2sPark%20Centra!5e0!3m2!1sen!2sin!4v1747821208414!5m2!1sen!2sin',
    },
  ];

  const [currentLocation, setCurrentLocation] = useState<string>(
    addresses.length > 0 ? addresses[0].location : ''
  );

  return (
    <main className="flex h-fit w-full items-center justify-center p-4 pt-0 md:p-16">
      <div className="relative min-h-[70vh] w-full rounded-[3rem] border bg-slate-300">
        <Map location={currentLocation} />

        {/* Address List */}
        <div className="outer absolute right-10 top-10 flex h-fit w-[40%] flex-col items-end gap-3">
          {addresses.map((address, index) => (
            <AddressItem
              key={index}
              title={address.title}
              description={address.description}
              location={address.location}
              onClick={() => setCurrentLocation(address.location)}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default MapContainer;
