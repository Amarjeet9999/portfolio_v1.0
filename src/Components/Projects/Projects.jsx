/** @format */

import React from "react";
import "./Portfolio.css";

import styled from "styled-components";

export const Projects = () => {
  return (
    <>
      <section className="portfolio" id="portfolio">
        <h1 className="heading">
          {" "}
          my <span>projects</span>{" "}
        </h1>

        <div className="box-container">
          <div className="box">
            <img src="/Images/reddit.png" alt="" />
            <div className="content">
              <h3>Reddit Clone</h3>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "40%",
                }}
              >
                <a
                  className="icons-git"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/Amarjeet9999/full-stack-reddit"
                >
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="/Images/github-brands.svg"
                    alt=""
                  />
                </a>
                <a
                  className="icons-git"
                  target="_blank"
                  rel="noreferrer"
                  href="https://full-stack-reddit-clone.netlify.app"
                >
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="/Images/globe-solid.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <NewDiv>
              <h3>Built with React, Redux, MongoDB and JavaScript</h3>
            </NewDiv>
          </div>
          <div className="box">
            <img src="/Images/explorepage.png" alt="" />
            <div className="content">
              <h3>Unacademy Clone</h3>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "40%",
                }}
              >
                <a
                  className="icons-git"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/Sonamkneelam/project-unacademy"
                >
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="/Images/github-brands.svg"
                    alt=""
                  />
                </a>
                <a
                  className="icons-git"
                  target="_blank"
                  rel="noreferrer"
                  href="https://powerful-retreat-47517.herokuapp.com/"
                >
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="/Images/globe-solid.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <NewDiv>
              <h3>Built with React, JSX and JavaScript</h3>
            </NewDiv>
          </div>

          <div className="box">
            <img src="/Images/navbar.png" alt="" />
            <div className="content">
              <h3>Full Stack Nykaa Clone</h3>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "40%",
                }}
              >
                <a
                  className="icons-git"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/sarangKaliyath/U2_Clone"
                >
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="/Images/github-brands.svg"
                    alt=""
                  />
                </a>
                <a
                  className="icons-git"
                  href="https://u3-ubk.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="/Images/globe-solid.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <NewDiv>
              <h3>Built with Ejs, Javascript, Css, Express, and MongoDb.</h3>
            </NewDiv>
          </div>

          <div className="box">
            <img src="/Images/home_page.png" alt="" />
            <div className="content">
              <h3>Nykaa Clone Using HTML, CSS and JavsScript</h3>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "40%",
                }}
              >
                <a
                  className="icons-git"
                  href="https://github.com/sarangKaliyath/U2_Clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="/Images/github-brands.svg"
                    alt=""
                  />
                </a>
                <a
                  className="icons-git"
                  target="_blank"
                  rel="noreferrer"
                  href="https://u2ubk.netlify.app/"
                >
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="/Images/globe-solid.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <NewDiv>
              <h3>Built with only HTML, CSS and Javascript</h3>
            </NewDiv>
          </div>
          <div className="box">
            <img src="/Images/starWars.png" alt="" />
            <div className="content">
              <h3>Star Wars Search Engine</h3>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "40%",
                }}
              >
                <a
                  className="icons-git"
                  href="https://github.com/Amarjeet9999/starWar-Project"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="/Images/github-brands.svg"
                    alt=""
                  />
                </a>
                <a
                  className="icons-git"
                  target="_blank"
                  rel="noreferrer"
                  href="https://star-wars-demo.netlify.app/"
                >
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="/Images/globe-solid.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <NewDiv>
              <h3>Built with only HTML, CSS and Javascript</h3>
            </NewDiv>
          </div>
        </div>
      </section>
    </>
  );
};

const NewDiv = styled.div`
  height: 10rem;
  width: 100%;
  & h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--black);
    text-transform: uppercase;
    padding: 1rem 1rem;
  }
`;
