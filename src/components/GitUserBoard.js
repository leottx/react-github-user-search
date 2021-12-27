import React from 'react';

// ICONS
import { MdLocationOn, MdLink, MdOutlineApartment } from 'react-icons/md';
import { FaTwitter } from 'react-icons/fa';

// IMAGES
import OctoCat from '@Images/octocat.png';

import {
  UserContainer,
  UserBoardHeader,
  UserPic,
  UserWrapper,
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

const GitUserBoard = () => {
  return (
    <UserContainer>
      <UserBoardHeader>
        <UserPic src={OctoCat} alt='Github user profile pic' />
        <UserWrapper>
          <UserWrapper>
            <UserRealName>The Octocat</UserRealName>
            <UserName>@octocat</UserName>
          </UserWrapper>
          <UserJoinedDate>Joined 25 Jan 2011</UserJoinedDate>
        </UserWrapper>
      </UserBoardHeader>
      <UserBoardAbout>
        <UserBio>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus
          fugiat nam optio modi impedit. Dicta maxime adipisci quaerat quidem a
          laboriosam.
        </UserBio>
        <UserStats>
          <UserWrapper>
            <UserStatsType>Repos</UserStatsType>
            <UserStatsType>0</UserStatsType>
          </UserWrapper>
          <UserWrapper>
            <UserStatsType>Followers</UserStatsType>
            <UserStatsType>0</UserStatsType>
          </UserWrapper>
          <UserWrapper>
            <UserStatsType>Following</UserStatsType>
            <UserStatsType>0</UserStatsType>
          </UserWrapper>
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
  );
};

export default GitUserBoard;
