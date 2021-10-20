/** @format */

import React from "react";
import "./Home.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import Particles from "../Particle";

export const Home = () => {
  return (
    <>
      <Party className='particle-con'>
        <Particles />
      </Party>
      <section className='home' id='home'>
        <div className='content'>
          <h3>
            <span>Hi, I'm </span>
            <span>Amarjeet Kumar</span>
          </h3>
          {/* <h3></h3> */}
          <p>
            <Typewriter
              options={{
                strings: [
                  "I'm a Full Stack Web Developer",
                  "I'm a Front End Developer",
                  "I'm a Back End Developer",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
              }}
            />
          </p>
          <Link
            className='btn'
            to='/Files/Amarjeet.pdf'
            target='_blank'
            download>
            Download CV
          </Link>
        </div>

        <div className='share'>
          <a
            href='https://github.com/Amarjeet9999'
            target='_blank'
            className='fab fa-github'></a>
          <a
            target='_blank'
            href='https://www.linkedin.com/in/amarjeetlinkedl/'
            className='fab fa-linkedin'></a>
          <a to='.' className='fab fa-facebook-f'></a>
          {/* <Link to='.' className='fab fa-linkedin'></Link>
          <Link to='.' className='fab fa-pinterest'></Link> */}
        </div>
      </section>
    </>
  );
};

export const Party = styled.div`
  position: absolute;
  height: 100%;
  z-index: -9999;
`;
