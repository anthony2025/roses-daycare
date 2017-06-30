/*
 * inspired by https://css-tricks.com/line-on-sides-headers/
 * Usage example:
 *
 * import HeaderLines from '../WithHorizontalLines'
 * const WithHorizontalLines = HeaderLines.extend`
 *    --color: black
 * `
 * render() {<WithHorizontalLines>My Header</WithHorizontalLines>}
 */

import styled from 'styled-components'

export default styled.div`
  --thickness: 1px;
  --spacing: 15px;
  --width: 30px;
  --color: white;
  --offset: 50%;

  text-align: center;

  & > * {
    display: inline-block;
    position: relative;
  }

  & > *:empty {
    display: none;
  }

  & > *:before,
  & > *:after {
    content: "";
    position: absolute;
    height: var(--offset);
    width: var(--width);
    border-bottom: var(--thickness) solid var(--color);
    top: 0;
  }

  & > *:before {
    right: 100%;
    margin-right: var(--spacing);
  }

  & > *:after {
    left: 100%;
    margin-left: var(--spacing);
  }
`
