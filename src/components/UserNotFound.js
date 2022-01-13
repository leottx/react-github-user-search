import React from 'react';

import octocat from '@Images/octocat-not-found.png';

// STYLES
import {
  NotFoundContainer,
  NotFoundPic,
  NotFoundWrapper,
  NotFoundText,
} from '@Styles/main';

const UserNotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundPic src={octocat} alt='GitHub mascot dressed like Wally' />
      <NotFoundWrapper>
        <NotFoundText>
          <span>Oooh no!</span>
          <span>This user does not exist...</span>
        </NotFoundText>
      </NotFoundWrapper>
    </NotFoundContainer>
  );
};

export default UserNotFound;
