import React from 'react';
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
  UserFooterLink,
} from '@Styles/main';

// TEMA
import theme from '@Styles/theme';

const GitUserBoard = () => {
  return (
    <ThemeProvider theme={theme}>
      <UserContainer>
        <UserBoardHeader>
          <UserPic src={OctoCat} alt='Github user profile pic' />
          <Box>
            <UserWrapper>
              <Box>
                <UserRealName>The Octocat</UserRealName>
                <UserName>@octocat</UserName>
              </Box>
              <UserJoinedDate>Joined 25 Jan 2011</UserJoinedDate>
            </UserWrapper>
            <UserBio>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatibus fugiat nam optio modi impedit. Dicta maxime adipisci
              quaerat quidem a laboriosam.
            </UserBio>
          </Box>
        </UserBoardHeader>
        <UserBoardAbout>
          <UserBio>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatibus fugiat nam optio modi impedit. Dicta maxime adipisci
            quaerat quidem a laboriosam.
          </UserBio>
          <UserStats>
            <Box>
              <UserStatsType>Repos</UserStatsType>
              <UserStatsType>0</UserStatsType>
            </Box>
            <Box>
              <UserStatsType>Followers</UserStatsType>
              <UserStatsType>0</UserStatsType>
            </Box>
            <Box>
              <UserStatsType>Following</UserStatsType>
              <UserStatsType>0</UserStatsType>
            </Box>
            <Box>
              <UserStatsType>Stars</UserStatsType>
              <UserStatsType>0</UserStatsType>
            </Box>
          </UserStats>
        </UserBoardAbout>
        <UserBoardFooter>
          <UserLinkList>
            <UserFooterLink>
              <MdLocationOn />
              <span>Placeholder</span>
            </UserFooterLink>
            <UserFooterLink>
              <MdLink />
              <span>https://github.com/blog</span>
            </UserFooterLink>
            <UserFooterLink>
              <FaTwitter />
              <span>Not Avaible</span>
            </UserFooterLink>
            <UserFooterLink>
              <MdOutlineApartment />
              <span>placeholder</span>
            </UserFooterLink>
          </UserLinkList>
        </UserBoardFooter>
      </UserContainer>
    </ThemeProvider>
  );
};

export default GitUserBoard;
