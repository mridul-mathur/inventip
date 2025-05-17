"use client";

import React from "react";
import Buttons from "../buttons";

const ContactUs = () => {
  return (
    <main className="min-h-[100vh] w-full flex flex-col md:flex-row p-4 md:p-16 pt-12">
      <div className="w-full md:w-[50%] px-4 space-y-4 md:px-10 pt-6 md:pt-[5%]">
        <h1 className="text-head sm:text-max font-semibold">
          Get in Touch with Us
        </h1>
        <p className="text-para text-light ">
          We'd love to hear from you! Whether you have a question, need a
          consultation, or want to learn more about our services, please fill
          out the form below and we'll get back to you as soon as possible.
        </p>
      </div>

      <div className="w-full md:w-[50%] p-4 md:p-10">
        <ContactForm />
      </div>
    </main>
  );
};

const ContactForm = () => {
  const formFields = [
    {
      id: "name",
      label: "Name",
      type: "text",
      placeholder: "Enter your name",
    },
    {
      id: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
    },
    {
      id: "phone",
      label: "Phone Number",
      type: "tel",
      placeholder: "Enter your phone number",
    },
    {
      id: "company",
      label: "Company/Organization",
      type: "text",
      placeholder: "Enter your company name",
    },
    {
      id: "sector",
      label: "Sector",
      type: "dropdown",
      placeholder: "Select your sector",
    },
    {
      id: "inquiry",
      label: "Inquiry Type",
      type: "dropdown",
      placeholder: "Select your inquiry type",
    },
    {
      id: "message",
      label: "How can we help you?",
      type: "textarea",
      placeholder: "Enter your message",
    },
  ];

  return (
    <form className="flex flex-col gap-6">
      {formFields.map((field) => (
        <div key={field.id} className="flex flex-col gap-2">
          <label htmlFor={field.id} className="text-paramin font-medium">
            {field.label}
          </label>
          {field.type === "textarea" ? (
            <textarea
              id={field.id}
              placeholder={field.placeholder}
              className="p-3 border border-black rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              rows={4}
            ></textarea>
          ) : (
            <input
              id={field.id}
              type={field.type}
              placeholder={field.placeholder}
              className="p-3 border border-black rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          )}
        </div>
      ))}
      <Buttons color="black">Submit</Buttons>
    </form>
  );
};

export default ContactUs;
