import styled from 'styled-components';

export const HeaderContainer = styled.header`
  color: var(--txt-1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
`;
export const LogoLink = styled.a`
  font-size: 3rem;
  cursor: pointer;
  transition-property: color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  &:hover {
    color: var(--txt-3);
  }
`;
export const ThemeButton = styled.button`
  text-transform: uppercase;
  letter-spacing: 0.3em;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition-property: color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  &:hover {
    color: var(--txt-3);
  }
`;
