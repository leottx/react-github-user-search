import React, { useState } from 'react';

// STYLES
import { Main } from '@Styles/main';

// COMPONENTS
import GitSearch from '@Components/GitSearch';
import Loading from '@Components/Loading';
import GitUserBoard from '@Components/GitUserBoard';
import GitUserRepos from '@Components/GitUserRepos';

// UTILS
import { getUserData } from '@Utils/api';

const GitMain = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState(false);
  const [showRepos, setShowRepos] = useState(false);

  const buildUserProfile = (username) => {
    setUserData(false);
    setShowRepos(false);
    setIsLoading(true);
    getUserData(username).then((data) => {
      setIsLoading(false);
      setUserData(data);
    });
  };

  return (
    <Main>
      <GitSearch buildUserProfile={buildUserProfile} />
      {!userData && isLoading && <Loading />}
      {userData && <GitUserBoard userProfile={userData.profile} />}
      {userData && (
        <GitUserRepos
          reposList={userData.repos}
          showRepos={showRepos}
          setShowRepos={setShowRepos}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      )}
    </Main>
  );
};

export default GitMain;
