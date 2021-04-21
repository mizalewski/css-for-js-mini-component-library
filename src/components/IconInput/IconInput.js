import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  'small': {
    iconSize: 12,
    fontSize: '14px',
    inputPaddingLeft: '16px'
  },
  'large': {
    iconSize: 18,
    fontSize: '18px',
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
  bottom: 5px;
`

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const style = STYLES[size]

  return <Wrapper style={{'--width': `${width}px`, '--font-size': style.fontSize}}>
    <VisuallyHidden>{label}</VisuallyHidden>
    <StyledInput placeholder={placeholder} style={{'--padding-left': style.inputPaddingLeft}} />
    <IconWrapper>
      <Icon id={icon} size={style.iconSize} />
    </IconWrapper>
  </Wrapper>
};

export default IconInput;
