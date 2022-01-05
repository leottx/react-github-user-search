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
  @media only screen and (min-width: 667px) {
    font-size: 1.6rem;
    svg {
      margin: 0 0.8rem 0 1.4rem;
    }
  }
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

export const UserContainer = styled.article`
  display: grid;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
  grid-template-columns: 1fr 2fr;
  gap: 2.4rem;
  background: var(--white);
  padding: 3.6rem 2.4rem;
  border-radius: 1.5rem;
  @media screen and (min-width: 768px) {
    padding: 3.6rem;
    gap: 3.2rem;
  }
`;

export const UserBoardHeader = styled.header`
  display: flex;
  flex-direction: column;
  grid-column: 1 / -1;
  gap: 2.4rem;
  > div {
    flex-grow: 1;
    p {
      display: none;
    }
  }
  @media screen and (min-width: 420px) {
    flex-direction: row;
  }

  @media screen and (min-width: 768px) {
    > div {
      p {
        display: block;
      }
    }
  }
`;

export const UserPic = styled.img`
  height: auto;
  border-radius: 50%;
  min-width: 70px;
  max-width: 150px;
  align-self: center;
  width: 100%;
  @media screen and (min-width: 420px) {
    align-self: flex-start;
  }
`;

export const UserWrapper = styled.div`
  display: flex;
  gap: 1.6rem;
  flex-grow: 1;
  flex-wrap: wrap;
  align-items: baseline;
  > div {
    flex-grow: 1;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 2.4rem;
  }
`;

export const Box = styled.div``;

export const UserRealName = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--txt-1);
  @media screen and (min-width: 667px) {
    font-size: 2.4rem;
  }
`;

export const UserName = styled.a`
  font-size: 1.4rem;
  color: var(--txt-5);
  transition: color 150ms ease, text-decoration 300ms ease;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    color: ${({ theme: { c } }) => darken(0.1, c.bgBtn)};
  }
  @media screen and (min-width: 667px) {
    font-size: 1.8rem;
  }
`;

export const UserJoinedDate = styled.span`
  display: block;
  font-size: 1.4rem;
  color: var(--txt-2);
  @media screen and (min-width: 667px) {
    font-size: 1.7rem;
  }
`;

export const UserBoardAbout = styled.section`
  grid-column: 1/-1;
  > p {
    margin-bottom: 2.4rem;
  }

  @media screen and (min-width: 768px) {
    > p {
      display: none;
    }
  }
`;

export const UserBio = styled.p`
  color: var(--txt-2);
  font-size: 1.4rem;
  @media screen and (min-width: 667px) {
    font-size: 1.7rem;
  }
`;

export const UserStats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  border-radius: 1.5rem;
  background: var(--bg-2);
  padding: 2.2rem;
  gap: 1rem;
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;
  }
  > :last-child {
  }
`;

export const UserStatsType = styled.span`
  &:first-of-type {
    color: var(--txt-4);
    font-size: 1.4rem;
  }
  &:last-of-type {
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--txt-1);
  }
  @media screen and (min-width: 667px) {
    &:first-of-type {
      color: var(--txt-4);
      font-size: 1.6rem;
    }
    &:last-of-type {
      font-size: 2rem;
      font-weight: 700;
      color: var(--txt-1);
    }
  }
`;

export const UserBoardFooter = styled.footer`
  grid-column: 1 /-1;
`;

export const UserLinkList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
  width: 100%;
`;

export const UserFooterLink = styled.a`
  color: ${({ isAvaible }) => (isAvaible ? 'var(--txt-3)' : 'var(--txt-4)')};
  cursor: pointer;
  font-size: 1.4rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  svg {
    width: 24px;
    height: 24px;
  }
  @media screen and (min-width: 667px) {
    font-size: 1.6rem;
    svg {
      width: 26px;
      height: 26px;
    }
  }
`;
