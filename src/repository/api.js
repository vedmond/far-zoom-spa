import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { organizationsApiEndpoints } from './endpoints';

export const organizationsApi = createApi({
  reducerPath: 'organizationsApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  tagTypes: ['Organizations'],
  endpoints: (builder) => ({
    getOrganizationList: builder.query({
      query: ({ page, limit, userName, registrationNumber }) => ({
        url: organizationsApiEndpoints.getOrganizationList,
        params: { page, limit, userName, registrationNumber },
      }),
      providesTags: (result) =>
        result?.data
          ? [
              ...result.data.map(({ id }) => ({ type: 'Organizations', id })),
              { type: 'Organizations', id: 'LIST' },
            ]
          : [{ type: 'Organizations', id: 'LIST' }],
    }),
  }),
});
export const { useGetOrganizationListQuery } = organizationsApi;
