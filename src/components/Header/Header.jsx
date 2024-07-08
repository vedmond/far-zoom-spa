import React from 'react';
import { HeaderContainer } from './style';
import { SearchInput } from '../SearchInput/SearchInput';

export const Header = () => {
  return (
    <HeaderContainer>
      <SearchInput placeholder="Поиск по номеру" width="200px" flag={'number'} />
      <SearchInput placeholder="Поиск по имени" width="250px" flag={'name'} />
    </HeaderContainer>
  );
};
