import React, { useState } from 'react';

// THEME
import theme from '@Styles/theme';

// ICONS
import { FaRegStar, FaStar } from 'react-icons/fa';
import { GoPrimitiveDot } from 'react-icons/go';
import { FaRegHandPointer } from 'react-icons/fa';

// STYLES
import {
  RepoContainer,
  RepoButton,
  RepoText,
  RepoCardsList,
  RepoCard,
  RepoTitle,
  RepoLink,
  RepoWrapper,
  RepoExtra,
} from '@Styles/main';

// UTILS
import { nanoid } from 'nanoid';
import { formatDate } from '@Utils/api';

const GitUserRepos = ({ reposList, showRepos, setShowRepos }) => {
  const handleShowRepos = () => {
    setShowRepos(!showRepos);
  };

  return (
    <RepoContainer>
      {!showRepos && (
        <RepoButton onClick={() => handleShowRepos()}>Show Repos</RepoButton>
      )}
      {showRepos && (
        <RepoCardsList>
          {reposList.map((repo) => {
            const {
              html_url,
              name,
              description,
              stargazers_count,
              updated_at,
            } = repo;
            return (
              <RepoCard key={`repo-${nanoid()}`}>
                <RepoTitle>
                  <RepoLink href={html_url} target='_blank'>
                    {name}
                  </RepoLink>
                  <FaRegHandPointer />
                </RepoTitle>
                <RepoText>
                  {description ? description : 'No description'}
                </RepoText>
                <RepoWrapper>
                  <RepoExtra>
                    <FaRegStar />
                    {stargazers_count}
                  </RepoExtra>
                  <GoPrimitiveDot size={10} />
                  <RepoExtra>Updated at {formatDate(updated_at)}</RepoExtra>
                </RepoWrapper>
              </RepoCard>
            );
          })}
        </RepoCardsList>
      )}
    </RepoContainer>
  );
};

export default GitUserRepos;
