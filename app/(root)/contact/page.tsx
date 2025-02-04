// filepath: /d:/Artisienne_Front/app/(root)/contact/page.tsx
"use client"
import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs.send(
      'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
      templateParams,
      'YOUR_USER_ID' // Replace with your EmailJS user ID
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      // Reset form
      setName("");
      setEmail("");
      setMessage("");
    }).catch((error) => {
      console.error('FAILED...', error);
    });
  };

  return (
    <>
      <div className="flex flew-wrap flex-col justify-center object-fill">
        <div className="flex flex-col items-center py-4">
          <h1 className="font-bold text-[30px] border-b">Contact Details</h1>
          <br />
          <p className="font-bold border-b">Email:</p>
          <a href="mailto:info@artisienne.ca" target="_blank">
            info@artisienne.ca
          </a>
          <br />

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-2 max-w-md w-full mt-6">
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              className="border rounded p-2"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              id="email"
              className="border rounded p-2"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              className="border rounded p-2"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />

            <button type="submit" className="bg-blue-600 text-white p-2 rounded">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
