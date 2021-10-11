/** @format */

import React from "react";
import styled from "styled-components";

export const Created = () => {
  return (
    <Credit>
      created by <span>amarjeet kumar</span> | all rights reserved
    </Credit>
  );
};

const Credit = styled.div`
  font-size: 2rem;
  text-align: center;
  padding: 2.5rem 1rem;
  margin-top: 1rem;
  border-top: var(--border);
  color: var(--black);
  & span {
    color: var(--green);
  }
`;
