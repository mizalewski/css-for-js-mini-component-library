/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants";

const Wrapper = styled.div`
  height: var(--height);
  width: 100%;
  padding: var(--progressSpacing);
  border-radius: var(--borderRadius);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
  /* trip of corners when progress bar is near full */
  overflow: hidden;
`;

const Progress = styled.div`
  background-color: ${COLORS.primary};
  height: 100%;
  width: ${(props) => `${props.value || 0}%`};
  border-bottom-left-radius: var(--borderRadius);
  border-top-left-radius: var(--borderRadius);
`;

const SIZES = {
  small: {
    "--height": "8px",
    "--borderRadius": "8px",
  },
  medium: {
    "--height": "12px",
    "--borderRadius": "4px",
  },
  large: {
    "--height": "24px",
    "--progressSpacing": "4px",
    "--borderRadius": "4px",
  },
};

const ProgressWrapper = styled.div`
  height: 100%;
  width: 100%;
  border-radius: var(--borderRadius);
  overflow: hidden;
`

const ProgressBar = ({ value, size }) => {
  const style = SIZES[size];

  return (
    <Wrapper style={style}>
      <ProgressWrapper>
        <Progress
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={value}
          aria-valuemax={100}
          min={0}
          max={100}
          value={value}
        />
      </ProgressWrapper>
    </Wrapper>
  );
};

export default ProgressBar;
