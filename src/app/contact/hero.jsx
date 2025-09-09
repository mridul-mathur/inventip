'use client';

import React from 'react';
import Buttons from '../buttons';
import { useState } from 'react';
import { FaLinkedinIn, FaTwitter, FaFacebookF } from 'react-icons/fa';
import { Linkedin, Mail, Mailbox, MailCheck, MailWarning } from 'lucide-react';

const ContactUs = () => {
  return (
    <main className="flex h-fit min-h-[100vh] w-full flex-col p-4 pt-16 md:flex-row md:p-24">
      <div className="sticky top-24 h-fit w-full space-y-4 px-4 md:w-[50%] md:px-10">
        <h1 className="text-head font-semibold sm:text-max">
          Get in Touch with Us
        </h1>
        <p className="text-light text-para">
          We&#39;d love to hear from you! Whether you have a question, need a
          consultation, or want to learn more about our services, please fill
          out the form below and we&#39;ll get back to you as soon as possible.
        </p>
        <div className="flex flex-col gap-4 pt-4">
          <p className="text-subhead font-light">
            Follow us on social media to stay updated with the latest news and
            insights.
          </p>
          <div className="flex gap-6">
            <a
              href="https://linkedin.com/company/inventip-legal-services-llp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Buttons color="dark">
                <Linkedin size={24} />
              </Buttons>
            </a>
            <a
              href="mailto:letstalk@inventip.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Buttons color="dark">
                <Mail size={24} />
              </Buttons>
            </a>
          </div>
        </div>
      </div>
      <div className="h-fit w-full px-4 md:w-[50%] md:px-10">
        <ContactForm />
      </div>
    </main>
  );
};

const ContactForm = () => {
  const [sector, setSector] = useState('');
  const [inquiry, setInquiry] = useState('');

  const formFields = [
    {
      id: 'name',
      label: 'Name',
      type: 'text',
      placeholder: 'Enter your name',
    },
    {
      id: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'Enter your email',
    },
    {
      id: 'phone',
      label: 'Phone Number',
      type: 'tel',
      placeholder: 'Enter your phone number',
    },
    {
      id: 'company',
      label: 'Company/Organization',
      type: 'text',
      placeholder: 'Enter your company name',
    },
    {
      id: 'sector',
      label: 'Sector',
      type: 'dropdown',
      placeholder: 'Select your sector',
      options: [
        'Mobility',
        'Healthcare',
        'Agriculture',
        'Electrical & Electronics',
        'Communication',
        'Food & Nutrition',
        'Cosmetics',
        'Chemicals',
        'Material Science',
        'Energy & Natural Resources',
        'Pharmaceuticals',
        'Semiconductors',
        'Textile',
        'Sustainability',
        'Others',
      ],
    },
    {
      id: 'inquiry',
      label: 'Inquiry Type',
      type: 'dropdown',
      placeholder: 'Select your inquiry type',
      options: [
        'General Inquiry',
        'Legal Consultation',
        'Case Evaluation',
        'IP Due Diligence & Audit Inquiry',
        'Patentability Search & Analysis',
        'Licensing & Cross-Licensing Inquiry',
        'IP Strategy & Portfolio Management Inquiry',
        'Open Innovation & Technology Scouting Inquiry',
        'Others',
      ],
    },
    {
      id: 'message',
      label: 'How can we help you?',
      type: 'textarea',
      placeholder: 'Enter your message',
    },
  ];

  return (
    <form className="flex flex-col gap-6 pt-6">
      {formFields.map(field => (
        <div key={field.id} className="flex flex-col gap-2">
          <label htmlFor={field.id} className="text-paramin font-medium">
            {field.label}
          </label>
          {field.type === 'textarea' ? (
            <textarea
              id={field.id}
              placeholder={field.placeholder}
              className="rounded-md border border-black p-3 focus:outline-none focus:ring focus:ring-blue-300"
              rows={4}
            ></textarea>
          ) : field.type === 'dropdown' ? (
            <select
              id={field.id}
              className="rounded-md border border-black p-3 focus:outline-none focus:ring focus:ring-blue-300"
              value={field.id === 'sector' ? sector : inquiry}
              onChange={e =>
                field.id === 'sector'
                  ? setSector(e.target.value)
                  : setInquiry(e.target.value)
              }
            >
              <option value="" disabled hidden>
                {field.placeholder}
              </option>
              {field.options.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <input
              id={field.id}
              type={field.type}
              placeholder={field.placeholder}
              className="rounded-md border border-black p-3 focus:outline-none focus:ring focus:ring-blue-300"
            />
          )}
          {field.id === 'sector' && sector === 'Others' && (
            <input
              type="text"
              placeholder="Please specify sector"
              className="mt-2 rounded-md border border-black p-3 focus:outline-none focus:ring focus:ring-blue-300"
            />
          )}
          {field.id === 'inquiry' && inquiry === 'Others' && (
            <input
              type="text"
              placeholder="Please specify inquiry type"
              className="mt-2 rounded-md border border-black p-3 focus:outline-none focus:ring focus:ring-blue-300"
            />
          )}
        </div>
      ))}
      <div className="flex h-fit w-fit items-center justify-center">
        <Buttons color="dark" arrow underline>
          Submit Form
        </Buttons>
      </div>
    </form>
  );
};

export default ContactUs;
