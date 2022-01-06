import React, { useState } from 'react';

// STYLES
import { Main } from '@Styles/main';

// COMPONENTS
import GitSearch from '@Components/GitSearch';
import GitUserBoard from '@Components/GitUserBoard';

// UTILS
import { getUserData } from '@Utils/api';

const GitMain = () => {
  const [userData, setUserData] = useState(null);

  const buildUserProfile = (username) => {
    getUserData(username).then((data) => {
      setUserData(data);
    });
  };

  return (
    <Main>
      <GitSearch buildUserProfile={buildUserProfile} />
      {userData && <GitUserBoard userProfile={userData.profile} />}
    </Main>
  );
};

export default GitMain;
