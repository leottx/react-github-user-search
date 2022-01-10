import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

// ICONS
import { RiSearchLine } from 'react-icons/ri';

// COMPONENTS
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
        <SearchButton>Search</SearchButton>
      </SearchForm>
    </SearchContainer>
  );
};

export default GitSearch;
