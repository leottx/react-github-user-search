import React, { useState } from 'react';

// STYLES
import { Main } from '@Styles/main';

// COMPONENTS
import GitSearch from '@Components/GitSearch';
import GitUserBoard from '@Components/GitUserBoard';
import GitUserRepos from '@Components/GitUserRepos';

// UTILS
import { getUserData } from '@Utils/api';

const GitMain = () => {
  const [userData, setUserData] = useState(null);
  const [showRepos, setShowRepos] = useState(false);

  const buildUserProfile = (username) => {
    getUserData(username).then((data) => {
      setUserData(data);
      setShowRepos(false);
    });
  };

  return (
    <Main>
      <GitSearch buildUserProfile={buildUserProfile} />
      {userData && <GitUserBoard userProfile={userData.profile} />}
      {userData && (
        <GitUserRepos
          reposList={userData.repos}
          showRepos={showRepos}
          setShowRepos={setShowRepos}
        />
      )}
    </Main>
  );
};

export default GitMain;
