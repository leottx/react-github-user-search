import styled from 'styled-components';

export const HeaderContainer = styled.header`
  color: ${({ theme: { c } }) => c.txt_1};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
`;

export const LogoLink = styled.a`
  font-size: 2.4rem;
  cursor: pointer;
  transition-property: color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  &:hover {
    color: ${({ theme: { c } }) => c.txt_3};
  }
  @media only screen and (min-width: 667px) {
    font-size: 3rem;
  }
`;

export const ThemeButton = styled.button`
  text-transform: uppercase;
  letter-spacing: 0.3em;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition-property: color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  &:hover {
    color: ${({ theme: { c } }) => c.txt_3};
  }
  svg {
    width: 22px;
    height: auto;
  }
  @media only screen and (min-width: 667px) {
    font-size: 2rem;
    svg {
      width: 28px;
    }
  }
`;
