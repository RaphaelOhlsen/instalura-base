import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import propToStyle from '../../../theme/utils/propToStyle';

export const TextStyleVariantsMap = {
  paragraph1: css`
  font-size: ${({ theme }) => theme.typographyVariants.paragraph1.fontSize};
  font-weight: ${({ theme }) => theme.typographyVariants.paragraph1.fontWeight};
  line-height: ${({ theme }) => theme.typographyVariants.paragraph1.lineHeight}; 
`,

  smallestException: css`
  font-size: ${({ theme }) => theme.typographyVariants.smallestException.fontSize};
  font-weight: ${({ theme }) => theme.typographyVariants.smallestException.fontWeight};
  line-height: ${({ theme }) => theme.typographyVariants.smallestException.lineHeight}; 
`,
};

const TextBase = styled.span`
  ${(props) => TextStyleVariantsMap[props.variant]}
  ${propToStyle('textAlign')}
`;

const Text = ({
  tag, variant, children, ...props
}) => (
  <TextBase
    as={tag}
    variant={variant}
    {...props}
  >
    { children}
  </TextBase>
);

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
};

Text.propTypes = {
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'li', 'a', 'span']),
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['paragraph1', 'smallestException']),
};

export default Text;
