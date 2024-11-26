"use client";

import React, { useState } from "react";

// Address Interface
interface Address {
  title: string;
  description: string;
  location: string;
}

// Map Component
const Map: React.FC<{ location: string }> = ({ location }) => {
  return (
    <div className="min-h-[70vh] border w-full bg-slate-300 rounded-[3rem] relative">
      <iframe
        src={location}
        width="100%"
        height="100%"
        style={{ border: 0, borderRadius: "2rem", height: "70vh" }}
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
      className="h-fit w-fit bg-white/50 backdrop-blur-sm p-5 rounded-2xl cursor-pointer hover:shadow-md border"
      onClick={onClick}
    >
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

// Main MapContainer Component
const MapContainer: React.FC = () => {
  const addresses = [
    {
      title: "Address 1",
      description: "JECRC University, Jaipur, India",
      location:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56992.164416405474!2d75.83411437203732!3d26.775942370004156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc892b8f05399%3A0x43fbca7105eca800!2sJECRC%20University!5e0!3m2!1sen!2sin!4v1732524535160!5m2!1sen!2sin",
    },
    {
      title: "Address 2",
      description: "JECRC Foundation",
      location:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56989.134352403365!2d75.74629474863278!3d26.781978500000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc9763e6030f1%3A0x4137675e5cf54360!2sJECRC%20Foundation!5e0!3m2!1sen!2sin!4v1732525863037!5m2!1sen!2sin",
    },
  ];

  const [currentLocation, setCurrentLocation] = useState<string>(
    addresses.length > 0 ? addresses[0].location : ""
  );

  return (
    <main className="h-fit w-full flex justify-center items-center p-4 md:p-16 pt-0">
      <div className="min-h-[70vh] border w-full bg-slate-300 rounded-[3rem] relative">
        {/* Map */}
        <Map location={currentLocation} />

        {/* Address List */}
        <div className="outer absolute top-10 right-10 h-fit w-[40%] flex flex-col gap-3 items-end">
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
