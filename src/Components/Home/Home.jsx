/** @format */

import React from "react";
import "./Home.css";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

export const Home = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="content">
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
          <a
            className="btn"
            href="https://drive.google.com/file/d/1W5JEU9O4C5CeCoMkC0GR6qHKwmSLQ3x9/view?usp=sharing"
            target="_blank"
          >
            Download CV
          </a>
        </div>

        <div className="share">
          <a
            href="https://github.com/Amarjeet9999"
            target="_blank"
            rel="noreferrer"
            className="fab fa-github"
          ></a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/amarjeetlinkedl/"
            rel="noreferrer"
            className="fab fa-linkedin"
          ></a>
          <a href="." rel="noreferrer" className="fab fa-facebook-f"></a>
        </div>
      </section>
    </>
  );
};

export const Party = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: -9999;
`;
