import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';

// STYLES
import { lightMode, darkMode } from '@Styles/theme';
import { GlobalStyles } from '@Styles/global';
import { Container } from '@Styles/global';

// COMPONENTS
import ThemeContext from '@Components/ThemeContext';
import GitHeader from '@Components/GitHeader';
import GitMain from '@Components/GitMain';

// IMAGES
import favicon from '@Images/favicon.svg';

const App = () => {
  const [colorMode, setColorMode] = useState(false);

  return (
    <>
      <Helmet>
        <meta charSet='UTF-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='shortcut icon' href={favicon} />
        <title>Github User Search - Leonardo Teixeira</title>
      </Helmet>
      <ThemeContext.Provider value={[colorMode, setColorMode]}>
        <ThemeProvider theme={colorMode ? darkMode : lightMode}>
          <GlobalStyles />
          <Container>
            <GitHeader />
            <GitMain />
          </Container>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
};

export default App;
