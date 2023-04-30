"use client";
import { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(
      `Submitting form with name: ${name}, email: ${email}, and message: ${message}`
    );
    // You can add your form submission logic here
  };

  return (
    <div className="contact-from-container" id="kontakt">
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="top">
          <div className="form-group name-container">
            <input
              id="name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
              placeholder="Nimi..."
            />
          </div>
          <div className="form-group email-container">
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              placeholder="E-mail..."
            />
          </div>
        </div>
        <div className="form-group">
          <textarea
            id="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            required
            placeholder="Sisesta vastav sõnum..."
          />
        </div>
        <button type="submit">
          <p>Saada!</p>
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
