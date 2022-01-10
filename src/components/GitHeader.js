import React, { createContext, useContext } from 'react';
import ThemeContext from '@Components/ThemeContext';
import { HeaderContainer, LogoLink, ThemeButton } from '@Styles/header';
import { MdWbSunny, MdNightlightRound } from 'react-icons/md';

const GitHeader = () => {
  const [colorMode, setColorMode] = useContext(ThemeContext);

  return (
    <HeaderContainer>
      <LogoLink>devfinder</LogoLink>
      <ThemeButton onClick={() => setColorMode(!colorMode)}>
        {!colorMode ? 'Dark' : 'Light'}
        {!colorMode ? <MdNightlightRound /> : <MdWbSunny />}
      </ThemeButton>
    </HeaderContainer>
  );
};

export default GitHeader;
