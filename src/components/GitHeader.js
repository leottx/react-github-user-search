import React, { useContext } from 'react';

// STYLES
import { HeaderContainer, LogoLink, ThemeButton } from '@Styles/header';

// ICONS
import { MdWbSunny, MdNightlightRound } from 'react-icons/md';

// COMPONENTS
import ThemeContext from '@Components/ThemeContext';

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
