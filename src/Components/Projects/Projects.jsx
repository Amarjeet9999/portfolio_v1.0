/** @format */

import React from "react";
import "./Portfolio.css";

import styled from "styled-components";

export const Projects = () => {
  return (
    <>
      
      <section className='portfolio' id='portfolio'>
        <h1 className='heading'>
          {" "}
          my <span>projects</span>{" "}
        </h1>

        <div className='box-container'>
          <div className='box'>
            <img src='/Images/unacademy.jpg' alt='' />
            <div className='content'>
              <h3>Unacademy Clone</h3>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "40%",
                }}>
                <a
                  className='icons-git'
                  target='_blank'
                  rel='noreferrer'
                  href='https://github.com/Sonamkneelam/project-unacademy'>
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src='/Images/github-brands.svg'
                    alt=''
                  />
                </a>
                <a
                  className='icons-git'
                  target='_blank'
                  rel='noreferrer'
                  href='https://powerful-retreat-47517.herokuapp.com/'>
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src='/Images/globe-solid.svg'
                    alt=''
                  />
                </a>
              </div>
            </div>
            <NewDiv>
              <h3>Built with React, JSX and JavaScipt.</h3>
            </NewDiv>
          </div>

          <div className='box'>
            <img src='/Images/navbar.png' alt='' />
            <div className='content'>
              <h3>Full Stack Nykaa Clone</h3>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "40%",
                }}>
                <a
                  className='icons-git'
                  target='_blank'
                  rel='noreferrer'
                  href='https://github.com/sarangKaliyath/Naykaa_V3.0/'>
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src='/Images/github-brands.svg'
                    alt=''
                  />
                </a>
                <a
                  className='icons-git'
                  href='https://powerful-retreat-47517.herokuapp.com/'
                  target='_blank'
                  rel='noreferrer'>
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src='/Images/globe-solid.svg'
                    alt=''
                  />
                </a>
              </div>
            </div>
            <NewDiv>
              <h3>Built with Ejs, Javascript, Css, Express, and MongoDb.</h3>
            </NewDiv>
          </div>

          <div className='box'>
            <img src='/Images/home_page.png' alt='' />
            <div className='content'>
              <h3>Nykaa Clone Using HTML, CSS and JavsScript</h3>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "40%",
                }}>
                <a
                  className='icons-git'
                  href='https://github.com/sarangKaliyath/Nykaa_Clone/'
                  target='_blank'
                  rel='noreferrer'>
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src='/Images/github-brands.svg'
                    alt=''
                  />
                </a>
                <a
                  className='icons-git'
                  target='_blank'
                  rel='noreferrer'
                  href='https://nykaa-html-css.netlify.app/'>
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src='/Images/globe-solid.svg'
                    alt=''
                  />
                </a>
              </div>
            </div>
            <NewDiv>
              <h3>Built with only HTML, CSS and Javascript.</h3>
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
