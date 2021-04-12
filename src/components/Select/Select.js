import React from "react";
import styled from "styled-components";

import { getDisplayedValue } from "./Select.helpers";
import { COLORS } from "../../constants";

const SelectIcon = () => {
  return (
    <svg
      style={{marginLeft: -32, pointerEvents: 'none'}}
      width="14"
      height="8"
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L7 7L13 1"
        stroke={COLORS.gray700}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const SelectWrapper = styled.select`
  padding: 12px 48px 12px 16px;
  appearance: none;
  border-radius: 8px;
  border: none;
  background-color: ${COLORS.transparentGray15};

  font-family: "Roboto", sans-serif;
  font-size: 16px;
  line-height: 18.75px;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};

    & + svg path {
      stroke: ${COLORS.black};
    }
  }

  &:focus {
    outline-width: 2px;
  }
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <div>
      <SelectWrapper role="listbox" value={value} onChange={onChange}>
        {children}
      </SelectWrapper>
      <SelectIcon />
    </div>
  );
};

export default Select;
