/** @format */
import React from "react";
import styled from "styled-components";

export const Resume = () => {
  return (
    <>
      <Main id="resume">
        <h1 className="heading">
          {" "}
          <span>my</span> skills{" "}
        </h1>

        <Skills>
          <Image>
            <img src="/Images/html.png" alt="" />
          </Image>
          <Image>
            <img src="/Images/css.png" alt="" />
          </Image>
          <Image>
            <img src="/Images/js.png" alt="" />
          </Image>
          <Image>
            <img src="/Images/react.png" alt="" />
          </Image>
          <Image>
            <img src="/Images/redux.png" alt="" />
          </Image>
          <Image>
            <img src="/Images/mongo.png" alt="" />
          </Image>
        </Skills>
        <h1 className="heading">
          {" "}
          <span> </span> Tools{" "}
        </h1>

        <Skills>
          <Image>
            <img src="/Images/vs.png" alt="" />
          </Image>
          <Image>
            <img src="/Images/postman.png" alt="" />
          </Image>
        </Skills>
      </Main>
    </>
  );
};

const Main = styled.div`
  padding: 5rem 0px;
`;

const Skills = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 5rem 0;
`;

const Image = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  & img {
    width: 24%;
    height: 89%;
  }
`;
