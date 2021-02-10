import styled, { css } from 'styled-components';
import get from 'lodash/get';

const ButtonGhost = css`
  color: ${
  ({ theme, variant }) => get(theme, `colors.${variant}.color`)
  };
  background-color: transparent;
`;

const ButtonDefault = css`
  background-color: ${
    ({ theme, variant }) => get(theme, `colors.${variant}.color`)
  };
  color: ${
  ({ theme, variant }) => get(theme, `colors.${variant}.contrastText`)
  };
`;

const Button = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: 700;
  opacity: 1;
  transition: opacity ${({theme}) => theme.transition};
  border-radius: ${({theme}) => theme.borderRadius};
  ${({ ghost }) => ghost ? ButtonGhost : ButtonDefault}
  &:hover, &:focus {
    opacity: .5;
  }
`;

export default Button;