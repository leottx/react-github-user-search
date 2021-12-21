import React from 'react';
import { Helmet } from 'react-helmet';

// IMAGES
import favicon from '@Images/favicon.svg';

const App = () => {
  return (
    <>
      <Helmet>
        <meta charSet='UTF-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='shortcut icon' href={favicon} />
        <title>Github User Search - Leonardo Teixeira</title>
      </Helmet>
    </>
  );
};

export default App;
