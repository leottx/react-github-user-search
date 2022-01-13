import React from 'react';

// ICONS
import { FaRegStar } from 'react-icons/fa';
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

// COMPONENTS
import Loading from '@Components/Loading';

// UTILS
import { nanoid } from 'nanoid';
import { formatDate } from '@Utils/api';
import { getRandomInterval } from '@Utils/aux';

const GitUserRepos = ({
  reposList,
  showRepos,
  setShowRepos,
  isLoading,
  setIsLoading,
}) => {
  const handleShowRepos = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowRepos(!showRepos);
    }, getRandomInterval(400, 1500));
  };

  return (
    <RepoContainer>
      {isLoading && <Loading />}
      {reposList.length > 0 && (
        <div>
          {!showRepos && !isLoading && (
            <RepoButton onClick={() => handleShowRepos()}>
              Show Repos
            </RepoButton>
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
        </div>
      )}
    </RepoContainer>
  );
};

export default GitUserRepos;
