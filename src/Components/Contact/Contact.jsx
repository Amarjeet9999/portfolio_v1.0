/** @format */

import React from "react";
import "./Contact.css";

export const Contact = () => {
  return (
    <>
      <section className='contact' id='contact'>
        <h1 className='heading'>
          <span>Contact</span> me{" "}
        </h1>

        <form action='' onSubmit={(e) => e.preventDefault()}>
          <input type='text' placeholder='Your Name' className='box' />
          <input type='email' placeholder='Your Email' className='box' />
          <input type='text' placeholder='Subject' className='box' />
          <textarea
            name=''
            className='box'
            placeholder='your message'
            id=''
            cols='30'
            rows='10'></textarea>
          <input type='submit' value='Send Message' className='btn' />
        </form>
      </section>
    </>
  );
};
