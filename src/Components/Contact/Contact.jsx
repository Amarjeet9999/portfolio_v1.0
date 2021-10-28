/** @format */

import React from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

export const Contact = () => {
  const sendEmail = (e) => {
    console.log(e.traget);

    e.preventDefault();

    emailjs
      .sendForm(
        "service_fqmd8g6",
        "template_9aq7ife",
        e.target,
        "user_m8LKXMpcOx6HR8IyeFhv8"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <>
      <section className="contact" id="contact">
        <h1 className="heading">
          <span>Contact</span> me{" "}
        </h1>

        <form action="" onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="Your Name"
            className="box"
            name="name"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="box"
            name="email"
          />
          <input
            type="text"
            placeholder="Subject"
            className="box"
            name="subject"
          />
          <textarea
            name="message"
            className="box"
            placeholder="your message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <input type="submit" value="Send Message" className="btn" />
        </form>
      </section>
    </>
  );
};
