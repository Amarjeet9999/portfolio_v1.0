/** @format */

import React from "react";
import "./Portfolio.css";
import Particles from "../Particle";
import { Party } from "../Home/Home";

export const Projects = () => {
  return (
    <>
      <Party className='particle-con'>
        <Particles />
      </Party>
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
                  href='https://powerful-retreat-47517.herokuapp.com/'>
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src='/Images/globe-solid.svg'
                    alt=''
                  />
                </a>
              </div>
            </div>
          </div>

          <div className='box'>
            <img src='/Images/navbar.png' alt='' />
            <div className='content'>
              <h3>Nykaa Clone using backend</h3>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "40%",
                }}>
                <a
                  className='icons-git'
                  target='_blank'
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
                  target='_blank'>
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src='/Images/globe-solid.svg'
                    alt=''
                  />
                </a>
              </div>
            </div>
          </div>

          <div className='box'>
            <img src='/Images/home_page.png' alt='' />
            <div className='content'>
              <h3>Nykaa Clone</h3>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "40%",
                }}>
                <a
                  className='icons-git'
                  href='https://github.com/sarangKaliyath/Nykaa_Clone/'
                  target='_blank'>
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src='/Images/github-brands.svg'
                    alt=''
                  />
                </a>
                <a
                  className='icons-git'
                  target='_blank'
                  href='https://powerful-retreat-47517.herokuapp.com/'>
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src='/Images/globe-solid.svg'
                    alt=''
                  />
                </a>
              </div>
            </div>
          </div>

          {/* <div className='box'>
          <img src='image/img-4.jpg' alt='' />
          <div className='content'>
            <h3>project 04</h3>
          </div>
        </div>

        <div className='box'>
          <img src='image/img-5.jpg' alt='' />
          <div className='content'>
            <h3>project 05</h3>
          </div>
        </div>

        <div className='box'>
          <img src='image/img-6.jpg' alt='' />
          <div className='content'>
            <h3>project 06</h3>
          </div>
        </div> */}
        </div>
      </section>
    </>
  );
};
