import styled from 'styled-components';
import { darken } from 'polished';

export const Main = styled.main``;

export const SearchContainer = styled.header`
  background: ${({ theme: { c } }) => c.bg_1};
  border-radius: 1.5rem;
  ${({ showError, theme: { c } }) =>
    showError ? `outline: 2px solid ${c.txt_6}` : 'outline: none'};
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
  color: ${({ theme: { c } }) => c.txt_1};
  background: transparent;
  min-width: 0;
  border: transparent;
  outline: none;
  width: 100%;
  &::placeholder {
    color: ${({ theme: { c } }) => c.txt_2};
  }
`;

export const SearchButton = styled.button`
  background: ${({ theme: { c } }) => c.txt_5};
  border-radius: 1rem;
  padding: 0.8em 1em;
  color: ${({ theme: { c } }) => c.white};
  font-weight: 700;
  margin-left: auto;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  &:hover {
    background: ${({ theme: { c } }) => darken(0.1, c.bg_3)};
  }
`;

export const SearchErrorMsg = styled.p`
  color: ${({ theme: { c } }) => c.txt_6};
  font-weight: 700;
  font-size: 1.4rem;
  margin-top: 0.8rem;
  margin-left: 1rem;
  margin-bottom: 2.4rem;
  @media screen and (min-width: 667px) {
    font-size: 1.6rem;
  }
`;

export const SearchErrorLink = styled.a`
  color: inherit;
  text-decoration: underline;
`;

export const Wrapper = styled.div`
  gap: 1rem;
  align-items: center;
  display: flex;
  flex-grow: 2;
  svg {
    color: ${({ theme: { c } }) => c.txt_5};
  }
`;

export const UserContainer = styled.article`
  margin-top: 2.4rem;
  display: grid;
  box-shadow: ${({ theme: { c } }) => `0 20px 25px -5px rgba(${c.shadow}, 0.1),
    0 8px 10px -6px rgba(${c.shadow}, 0.1)`};
  grid-template-columns: 1fr 2fr;
  gap: 2.4rem;
  background: ${({ theme: { c } }) => c.bg_1};
  padding: 3.6rem 2.4rem;
  border-radius: 1.5rem;
  @media screen and (min-width: 768px) {
    padding: 3.6rem;
    gap: 3.2rem;
    margin-bottom: 4.2rem;
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
  color: ${({ theme: { c } }) => c.txt_1};
  @media screen and (min-width: 667px) {
    font-size: 2.4rem;
  }
`;

export const UserName = styled.a`
  font-size: 1.4rem;
  color: ${({ theme: { c } }) => c.txt_5};
  transition: color 150ms ease, text-decoration 300ms ease;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    color: ${({ theme: { c } }) => darken(0.1, c.bg_3)};
  }
  @media screen and (min-width: 667px) {
    font-size: 1.8rem;
  }
`;

export const UserJoinedDate = styled.span`
  display: block;
  font-size: 1.4rem;
  color: ${({ theme: { c } }) => c.txt_2};
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
  color: ${({ theme: { c } }) => c.txt_2};
  font-size: 1.4rem;
  @media screen and (min-width: 667px) {
    font-size: 1.7rem;
  }
`;

export const UserStats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  border-radius: 1.5rem;
  background: ${({ theme: { c } }) => c.bg_2};
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
    color: ${({ theme: { c } }) => c.txt_4};
    font-size: 1.4rem;
  }
  &:last-of-type {
    font-size: 1.6rem;
    font-weight: 700;
    color: ${({ theme: { c } }) => c.txt_1};
  }
  @media screen and (min-width: 667px) {
    &:first-of-type {
      color: ${({ theme: { c } }) => c.txt_4};
      font-size: 1.6rem;
    }
    &:last-of-type {
      font-size: 2rem;
      font-weight: 700;
      color: ${({ theme: { c } }) => c.txt_1};
    }
  }
`;

export const UserBoardFooter = styled.footer`
  grid-column: 1 /-1;
`;

export const UserLinkList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

export const UserFooterLink = styled.a`
  color: ${({ theme: { c } }) => c.txt_4};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const UserFooterItem = styled.li`
  color: ${({ theme: { c } }) => c.txt_4};
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 100%;
  span {
    width: auto;
    max-width: 180px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  svg {
    width: 24px;
    height: 24px;
  }
  @media screen and (min-width: 667px) {
    font-size: 1.6rem;
    span {
      max-width: 230px;
    }
    svg {
      width: 26px;
      height: 26px;
    }
  }
`;

export const RepoContainer = styled.section`
  > div {
    margin-top: 3.6rem;
  }
  @media screen and (min-width: 768px) {
    > div {
      margin-top: 4.2rem;
    }
  }
`;

export const RepoButton = styled.button`
  border-radius: 1rem;
  border: 2px solid ${({ theme: { c } }) => c.txt_5};
  padding: 0.8em 1em;
  color: ${({ theme: { c } }) => c.txt_5};
  font-weight: 700;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  font-size: 1.4rem;
  display: block;
  margin: 0 auto;
  &:hover {
    color: ${({ theme: { c } }) => c.white};
    background: ${({ theme: { c } }) => c.bg_3};
  }
  @media screen and (min-width: 667px) {
    font-size: 1.6rem;
  }
`;

export const RepoCardsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  @media screen and (min-width: 768px) {
    font-size: 1.6rem;
    gap: 3rem;
  }
`;

export const RepoCard = styled.li`
  border-radius: 1.5rem;
  background: ${({ theme: { c } }) => c.bg_1};
  padding: 2rem;
  font-size: 1.4rem;
  color: ${({ theme: { c } }) => c.txt_2};
  line-height: 1.6;
  box-shadow: ${({ theme: { c } }) => `0 20px 25px -5px rgba(${c.shadow}, 0.1),
    0 8px 10px -6px rgba(${c.shadow}, 0.1)`};
  @media screen and (min-width: 667px) {
    font-size: 1.6rem;
  }
`;

export const RepoTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
  color: ${({ theme: { c } }) => c.txt_1};
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  cursor: pointer;
  &:hover {
    color: ${({ theme: { c } }) => c.txt_3};
  }
  &:hover a {
    text-decoration: underline;
  }
  svg {
    width: 18px;
    height: auto;
    transform: rotate(-53deg);
  }
  @media screen and (min-width: 667px) {
    font-size: 2rem;
  }
`;

export const RepoLink = styled.a`
  color: inherit;
  width: auto;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  @media screen and (min-width: 667px) {
    max-width: 550px;
  }
`;

export const RepoText = styled.p`
  margin-bottom: 1.2rem;
  max-width: 550px;
`;

export const RepoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const RepoExtra = styled.span`
  svg {
    margin-right: 0.5rem;
  }
`;

export const LoadingText = styled.p`
  font-size: 1.8rem;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  color: ${({ theme: { c } }) => c.txt_3};
  margin-top: 4.2rem;
  @media screen and (min-width: 667px) {
    font-size: 2.4rem;
  }
`;

export const LoadingDot = styled.span`
  letter-spacing: 0;
  opacity: 0;
  animation-name: showDot;
  animation-iteration-count: infinite;
  animation-duration: 0.75s;
  &:nth-child(2) {
    animation-delay: 0.25s;
  }
  &:last-child {
    animation-delay: 0.5s;
  }
  @keyframes showDot {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const NotFoundContainer = styled.section`
  display: flex;
  font-family: 'Montserrat';
  flex-wrap: wrap;
  margin-top: 4.8rem;
  gap: 3.6rem;
  @media screen and (min-height: 800px) {
    margin-top: 10rem;
  }
`;

export const NotFoundPic = styled.img`
  width: 80%;
  max-width: 280px;
  order: 2;
  display: block;
  margin: 0 auto;
`;

export const NotFoundWrapper = styled.div`
  order: 1;
  margin: 0 auto;
  align-self: center;
  color: ${({ theme: { c } }) => c.txt_3};
`;

export const NotFoundText = styled.p`
  span {
    display: block;
    &:first-child {
      font-size: 4rem;
      font-weight: 700;
      @media screen and (min-width: 667px) {
        font-size: 5.2rem;
      }
    }
    &:last-child {
      font-size: 1.8rem;
      font-weight: 500;
      @media screen and (min-width: 667px) {
        font-size: 3rem;
      }
    }
  }
`;
