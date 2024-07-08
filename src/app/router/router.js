import * as React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Error } from '../../pages/Error';
import { Main } from '../../pages/Main';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '*',
    element: <Error />,
  },
]);
