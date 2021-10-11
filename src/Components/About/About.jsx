/** @format */

import React from "react";
import "./About.css";

export const About = () => {
  return (
    <section class='about' id='about'>
      <h1 class='heading'>
        {" "}
        <span>about</span> me{" "}
      </h1>

      <div class='row'>
        <div class='content'>
          <h3>
            I am <span>amarjeet kumar</span>
          </h3>
          <p>
            Strong in design and integration with intuitive problem-solving
            skills. Proficient in React, Javascript. Passionate about
            implementing and launching new projects. Ability to translate
            business requirements into technical solutions. Looking to start the
            career as a web developer with a reputed firm driven by technology.
          </p>
          <a href='#' class='btn'>
            contact me
          </a>
        </div>
      </div>

      <div class='row'>
        <div class='progress'>
          <h3>
            {" "}
            javascript <span>95%</span>{" "}
          </h3>
          <div class='bar bar-2-3'>
            <span></span>
          </div>
          <h3>
            {" "}
            web design <span>90%</span>{" "}
          </h3>
          <div class='bar bar-1-1'>
            <span></span>
          </div>

          <h3>
            {" "}
            React <span>95%</span>{" "}
          </h3>
          <div class='bar bar-1-3'>
            <span></span>
          </div>
        </div>

        <div class='progress'>
          <h3>
            {" "}
            HTML <span>95%</span>{" "}
          </h3>
          <div class='bar bar-2-1'>
            <span></span>
          </div>
          <h3>
            {" "}
            CSS <span>80%</span>{" "}
          </h3>
          <div class='bar bar-2-2'>
            <span></span>
          </div>
          <h3>
            {" "}
            digital marketing <span>65%</span>{" "}
          </h3>
          <div class='bar bar-1-2'>
            <span></span>
          </div>
        </div>
      </div>
    </section>
  );
};
