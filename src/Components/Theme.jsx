/** @format */

import React from "react";
import styled from "styled-components";
import { ThemeContext } from "../ThemeContext/ThemeProvider";

export const Theme = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  const themeToggele = () => {
    if (theme === "dark") {
      document.body.classList.add("active");
      setTheme("active");
    } else {
      document.body.classList.remove("active");
      setTheme("dark");
    }
  };

  return (
    <ThemeToggler
      onClick={themeToggele}
      id='theme-toggler'
      className={
        theme === "dark" ? "fas fa-moon" : "fas fa-sun"
      }></ThemeToggler>
  );
};

const ThemeToggler = styled.div`
  position: fixed;
  top: 1.5rem;
  right: 2rem;
  z-index: 1000;
  height: 5rem;
  width: 5rem;
  line-height: 5rem;
  border-radius: 50%;
  font-size: 2rem;
  cursor: pointer;
  box-shadow: var(--box-shadow);
  text-align: center;
  color: var(--black);
  background: var(--bg-color);

  & :hover {
    color: var(--green);
    box-shadow: var(--box-shadow-inset);
  }
`;
