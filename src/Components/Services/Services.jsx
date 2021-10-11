/** @format */

import React from "react";
import "./Services.css";
export const Services = () => {
  return (
    <section class='services' id='services'>
      <h1 class='heading'>
        {" "}
        my <span>services</span>{" "}
      </h1>

      <div class='box-container'>
        <div class='box'>
          <i class='fas fa-code'></i>
          <h3>web design</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem quas delectus, laboriosam nulla dolore in.
          </p>
        </div>

        <div class='box'>
          <i class='fas fa-paint-brush'></i>
          <h3>graphic design</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem quas delectus, laboriosam nulla dolore in.
          </p>
        </div>

        <div class='box'>
          <i class='fas fa-mobile'></i>
          <h3>responsive design</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem quas delectus, laboriosam nulla dolore in.
          </p>
        </div>

        <div class='box'>
          <i class='fas fa-bullhorn'></i>
          <h3>digital marketing</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem quas delectus, laboriosam nulla dolore in.
          </p>
        </div>

        <div class='box'>
          <i class='fas fa-search-dollar'></i>
          <h3>SEO marketing</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem quas delectus, laboriosam nulla dolore in.
          </p>
        </div>

        <div class='box'>
          <i class='fab fa-wordpress'></i>
          <h3>wordpress</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem quas delectus, laboriosam nulla dolore in.
          </p>
        </div>
      </div>
    </section>
  );
};
