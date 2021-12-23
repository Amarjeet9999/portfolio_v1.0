/** @format */

import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <>
      <section className="about" id="about">
        <h1 className="heading">
          {" "}
          <span>about</span> me{" "}
        </h1>

        <div className="row">
          <div className="content">
            <h3>
              I am <span>Amarjeet Kumar</span>
            </h3>
            <p>
              Strong in design and integration with intuitive problem-solving
              skills. Efficient in React, Javascript. Passionate about
              implementing and launching new projects. Ability to translate
              business requirements into technical solutions. Looking to start
              the career as a web developer with a reputed firm driven by
              technology.
            </p>

            <a
              className="btn"
              href="https://drive.google.com/file/d/1W5JEU9O4C5CeCoMkC0GR6qHKwmSLQ3x9/view?usp=sharing"
              target="_blank"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
