/** @format */

import React from "react";
import "./Contact.css";

export const Contact = () => {
  return (
    <section class='contact' id='contact'>
      <h1 class='heading'>
        <span>contact</span> me{" "}
      </h1>

      <form action=''>
        <input type='text' placeholder='your name' class='box' />
        <input type='email' placeholder='your email' class='box' />
        <input type='text' placeholder='subject' class='box' />
        <textarea
          name=''
          class='box'
          placeholder='your message'
          id=''
          cols='30'
          rows='10'></textarea>
        <input type='submit' value='send message' class='btn' />
      </form>
    </section>
  );
};
