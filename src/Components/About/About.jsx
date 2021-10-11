/** @format */

import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import Particles from "../Particle";
import { Party } from "../Home/Home";

export const About = () => {
  return (
    <>
      <Party className='particle-con'>
        <Particles />
      </Party>
      <section className='about' id='about'>
        <h1 className='heading'>
          {" "}
          <span>about</span> me{" "}
        </h1>

        <div className='row'>
          <div className='content'>
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

            <Link
              className='btn'
              to='/Files/Amarjeet.pdf'
              target='_blank'
              download>
              Download CV
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

