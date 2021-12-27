import styled, { createGlobalStyle } from 'styled-components';

import SpaceMonoBold from '@Fonts/SpaceMono-Bold.ttf';
import SpaceMonoRegular from '@Fonts/SpaceMono-Regular.ttf';

export const GlobalStyles = createGlobalStyle`
  // FONTS
  @font-face {
    font-family: 'Space Mono';
    src: url(${SpaceMonoBold}) format('truetype');
    font-weight: 700;
    font-style: normal;
  };
  @font-face {
    font-family: 'Space Mono';
    src: url(${SpaceMonoRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
  };

  // VARIABLES
  :root {
    --white: #FFFFFF;
    --bg-1: #FEFEFE;
    --bg-2: #F5F8FF;
    --txt-1: #2F323C;
    --txt-2: #8D949D;
    --txt-3: #4C64A2;
    --txt-4: #A1B0C7;
    --txt-5: #266CFF;
  }

  // SMOOTH RESET
   html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    font-size: inherit;
    font-weight: inherit;
    font-family: inherit;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Space Mono';
    font-weight: 400;
    background-color: var(--bg-2);
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    background: none;
    border: none;
    cursor: pointer;
    color: inherit;
    font-family: inherit;
  }
`;

export const Container = styled.div`
  padding: 2.4rem;
  max-width: 768px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;
