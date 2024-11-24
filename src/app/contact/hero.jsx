"use client";

import React from "react";
import Buttons from '../buttons';

const ContactUs = () => {
    return (
        <main className="min-h-[100vh] w-full flex p-16 ">
            {/* Left Section */}
            <div className="w-[100%] min-h-[100%] px-10 pt-[5%] -r">
                <h1 className="text-max">tell us contact us line here</h1>
                <p className="text-para leading-6 pt-4">
                    this is some random lines about contact us and we will reply you in best of the time and other stuff comes in this line
                </p>
            </div>

            <div className="w-[100%] min-h-[100%] p-10">
                <ContactForm />
            </div>
        </main>
    );
};

const ContactForm = () => {
    const formFields = [
        { id: "name", label: "Name", type: "text", placeholder: "Enter your name" },
        { id: "email", label: "Email", type: "email", placeholder: "Enter your email" },
        { id: "phone", label: "Phone Number", type: "tel", placeholder: "Enter your phone number" },
        { id: "message", label: "Message", type: "textarea", placeholder: "Enter your message" },
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
                            className="p-3 border  border-black rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    )}
                </div>
            ))}
            <Buttons color="black">
                Submit
            </Buttons>
        </form>
    );
};

export default ContactUs;
