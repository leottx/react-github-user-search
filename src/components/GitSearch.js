import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

// TEMA
import theme from '@Styles/theme';

// ICONES
import { RiSearchLine } from 'react-icons/ri';

// COMPONENTES
import {
  SearchContainer,
  SearchForm,
  SearchField,
  SearchButton,
  Wrapper,
} from '@Styles/main';

const GitSearch = ({ updateUsername, buildUserProfile }) => {
  const [inputUsername, setInputUsername] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    if (!username) {
      return;
    }

    buildUserProfile(username);
  }, [username]);

  const submitHandler = (e) => {
    e.preventDefault();
    setUsername(inputUsername);
  };

  const inputChangeHandler = (e) => {
    setInputUsername(e.target.value);
  };

  return (
    <SearchContainer>
      <SearchForm onSubmit={(e) => submitHandler(e)}>
        <Wrapper>
          <RiSearchLine size={30} />
          <SearchField
            placeholder='Github username'
            onChange={(e) => inputChangeHandler(e)}
          />
        </Wrapper>
        <ThemeProvider theme={theme}>
          <SearchButton>Search</SearchButton>
        </ThemeProvider>
      </SearchForm>
    </SearchContainer>
  );
};

export default GitSearch;
