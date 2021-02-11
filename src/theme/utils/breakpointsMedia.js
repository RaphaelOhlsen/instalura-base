import breakpoints from '../breakpoints';
import { css } from 'styled-components';

export function breakpointsMedia(cssByBreakpoints) {
  const breakpointsName = Object.keys(cssByBreakpoints);

  return breakpointsName.map(breakpointName => {
    return css`
      @media screen and (min-width: ${breakpoints[breakpointName]}px) {
        ${cssByBreakpoints[breakpointName]}
      }
    `
  });
}