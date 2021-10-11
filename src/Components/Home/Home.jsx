/** @format */

import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

export const Home = () => {
  return (
    <section class='home' id='home'>

      <div class='content'>
        <h3>Amarjeet Kumar</h3>
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
        <Link class='btn' to='/Files/Amarjeet.pdf' target='_blank' download>
          Download CV
        </Link>
      </div>

      <div class='share'>
        <Link to='.' class='fab fa-facebook-f'></Link>
        <Link to='.' class='fab fa-twitter'></Link>
        <Link to='.' class='fab fa-instagram'></Link>
        <Link to='.' class='fab fa-linkedin'></Link>
        <Link to='.' class='fab fa-pinterest'></Link>
      </div>
    </section>
  );
};
