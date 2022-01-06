import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

// ICONS
import { MdLocationOn, MdLink, MdOutlineApartment } from 'react-icons/md';
import { FaTwitter } from 'react-icons/fa';

// IMAGES
import OctoCat from '@Images/octocat.png';

// STYLES
import {
  UserContainer,
  UserBoardHeader,
  UserPic,
  UserWrapper,
  Box,
  UserRealName,
  UserName,
  UserJoinedDate,
  UserBoardAbout,
  UserBio,
  UserStats,
  UserStatsType,
  UserBoardFooter,
  UserLinkList,
  UserFooterItem,
  UserFooterLink,
} from '@Styles/main';

// TEMA
import theme from '@Styles/theme';

// UTILS
import { getUserData } from '@Utils/api';

const GitUserBoard = ({ userProfile }) => {
  const {
    avatar_url,
    name,
    login,
    created_at,
    bio,
    public_repos,
    followers,
    following,
    user_starsCount,
    location,
    blog,
    company,
    twitter_username,
  } = userProfile;

  return (
    <ThemeProvider theme={theme}>
      <UserContainer>
        <UserBoardHeader>
          <UserPic src={avatar_url} alt='Github user profile pic' />
          <Box>
            <UserWrapper>
              <Box>
                <UserRealName>{name}</UserRealName>
                <UserName
                  href={`https://github.com/${login}`}
                >{`@${login}`}</UserName>
              </Box>
              <UserJoinedDate>{`Joined ${created_at}`}</UserJoinedDate>
            </UserWrapper>
            {bio && <UserBio>{bio}</UserBio>}
          </Box>
        </UserBoardHeader>
        <UserBoardAbout>
          {bio && <UserBio>{bio}</UserBio>}
          <UserStats>
            <Box>
              <UserStatsType>Repos</UserStatsType>
              <UserStatsType>{public_repos}</UserStatsType>
            </Box>
            <Box>
              <UserStatsType>Followers</UserStatsType>
              <UserStatsType>{followers}</UserStatsType>
            </Box>
            <Box>
              <UserStatsType>Following</UserStatsType>
              <UserStatsType>{following}</UserStatsType>
            </Box>
            <Box>
              <UserStatsType>Stars</UserStatsType>
              <UserStatsType>{user_starsCount}</UserStatsType>
            </Box>
          </UserStats>
        </UserBoardAbout>
        <UserBoardFooter>
          <UserLinkList>
            <UserFooterItem>
              <MdLocationOn />
              <span>{location ? location : 'Not avaible'}</span>
            </UserFooterItem>
            <UserFooterItem>
              <UserFooterLink href={blog ? blog : '#'} target='_blank'>
                <MdLink />
                <span>{blog ? blog : 'Not avaible'}</span>
              </UserFooterLink>
            </UserFooterItem>
            <UserFooterItem>
              <UserFooterLink
                href={
                  twitter_username
                    ? `https://twitter.com/${twitter_username}`
                    : '#'
                }
                target='_blank'
              >
                <FaTwitter />
                <span>
                  {twitter_username ? twitter_username : 'Not avaible'}
                </span>
              </UserFooterLink>
            </UserFooterItem>
            <UserFooterItem>
              <MdOutlineApartment />
              <span>{company ? company : 'Not avaible'}</span>
            </UserFooterItem>
          </UserLinkList>
        </UserBoardFooter>
      </UserContainer>
    </ThemeProvider>
  );
};

export default GitUserBoard;
