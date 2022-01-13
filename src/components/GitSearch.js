import React, { useState, useEffect, useRef } from 'react';

// ICONS
import { RiSearchLine } from 'react-icons/ri';

// IMAGE
import usernameRules from '@Images/github-username-composition-rules.png';

// STYLES
import {
  SearchContainer,
  SearchForm,
  SearchField,
  SearchButton,
  SearchErrorMsg,
  SearchErrorLink,
  Wrapper,
} from '@Styles/main';

// UTILS
import { checkUsername } from '@Utils/aux';

const GitSearch = ({ buildUserProfile }) => {
  const [inputUsername, setInputUsername] = useState('');
  const [username, setUsername] = useState('');
  const [showError, setShowError] = useState(false);

  const firstUpdate = useRef(true);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    if (!checkUsername(username)) {
      setShowError(true);
      return;
    }

    setShowError(false);
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
    <>
      <SearchContainer showError={showError}>
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
      {showError && (
        <SearchErrorMsg>
          Please enter a{' '}
          <SearchErrorLink href={usernameRules} target='_blank'>
            valid username
          </SearchErrorLink>
          .
        </SearchErrorMsg>
      )}
    </>
  );
};

export default GitSearch;
