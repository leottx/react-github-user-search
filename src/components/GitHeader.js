import React from 'react';
import { HeaderContainer, LogoLink, ThemeButton } from '@Styles/header';
import { MdWbSunny } from 'react-icons/md';

const GitHeader = () => {
  return (
    <HeaderContainer>
      <LogoLink>devfinder</LogoLink>
      <ThemeButton>
        Light
        <MdWbSunny size={24} />
      </ThemeButton>
    </HeaderContainer>
  );
};

export default GitHeader;
