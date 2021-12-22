import React from 'react';
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

const GitSearch = () => {
  return (
    <SearchContainer>
      <SearchForm>
        <Wrapper>
          <RiSearchLine size={30} />
          <SearchField placeholder='Github username' />
        </Wrapper>
        <ThemeProvider theme={theme}>
          <SearchButton>Search</SearchButton>
        </ThemeProvider>
      </SearchForm>
    </SearchContainer>
  );
};

export default GitSearch;
