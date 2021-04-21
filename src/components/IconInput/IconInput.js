import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  'small': {
    iconSize: 16,
    fontSize: 14 / 16 + 'rem',
    inputPaddingLeft: '16px'
  },
  'large': {
    iconSize: 24,
    fontSize: 18 / 16 + 'rem',
    inputPaddingLeft: '24px'
  }
}

const StyledInput = styled.input`
  appearance: none;
  border: none;
  margin: 0;
  padding: 0;
  width: 100%;
  padding-left: var(--padding-left);
  font-weight: 600;
  font-size: var(--font-size);
  color: currentColor;
  
  &:placeholder-shown {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
  
  &:focus {
    outline-offset: 3px;
  }
`

const Wrapper = styled.div`
  position: relative;
  width: var(--width);
  border-bottom: 1px ${COLORS.black} solid;
  padding-bottom: 3px;
  color: ${COLORS.gray700};
  
  &:hover {
    color: ${COLORS.black};
  }
`

const IconWrapper = styled.div`
  pointer-events: none;
  position: absolute;
  bottom: 0;
  top: 0;
  margin: auto 0;
  height: var(--size);
`

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
  ...delegated
}) => {
  const style = STYLES[size]

  return <Wrapper style={{'--width': `${width}px`, '--font-size': style.fontSize}}>
    <VisuallyHidden>{label}</VisuallyHidden>
    <StyledInput placeholder={placeholder} style={{'--padding-left': style.inputPaddingLeft}} {...delegated} />
    <IconWrapper style={{'--size': `${style.iconSize}px`}}>
      <Icon id={icon} size={style.iconSize} />
    </IconWrapper>
  </Wrapper>
};

export default IconInput;
