import styled from 'styled-components';
import { darken } from 'polished';

export const Main = styled.main``;

export const SearchContainer = styled.header`
  margin-bottom: 2.4rem;
  background: var(--white);
  border-radius: 1.5rem;
  padding: 1rem;
`;

export const SearchForm = styled.form`
  display: flex;
  font-size: 1.4rem;
  gap: 1rem;
  justify-content: space-between;
`;

export const SearchField = styled.input.attrs({ type: 'text' })`
  color: var(--txt-1);
  min-width: 0;
  border: transparent;
  outline: none;
  width: 100%;
  &::placeholder {
    color: var(--txt-2);
  }
`;

export const SearchButton = styled.button`
  background: var(--txt-5);
  border-radius: 1rem;
  padding: 0.8em 1em;
  color: var(--white);
  font-weight: 700;
  margin-left: auto;
  transition-property: 'background';
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  &:hover {
    background: ${({ theme: { c } }) => darken(0.1, c.bgBtn)};
  }
`;

export const Wrapper = styled.div`
  gap: 1rem;
  align-items: center;
  display: flex;
  flex-grow: 2;
  svg {
    color: var(--txt-5);
  }
`;
