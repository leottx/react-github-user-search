import React from 'react';
import { Main } from '@Styles/main';

import GitSearch from '@Components/GitSearch';
import GitUserBoard from '@Components/GitUserBoard';

const GitMain = () => {
  return (
    <Main>
      <GitSearch />
      <GitUserBoard />
    </Main>
  );
};

export default GitMain;
