import React from 'react';
import styled from 'styled-components';

export const Icon = styled.svg`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  fill: #666;
`;

export const SearchIcon =() => (
    <Icon viewBox="0 0 24 24">
      <path d="M15.5 14h-.79l-.28-.27a6.471 6.471 0 001.57-4.53C15 5.46 12.54 3 9.5 3S4 5.46 4 8.5 5.46 14 8.5 14c1.61 0 3.06-.62 4.13-1.64l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
    </Icon>
);