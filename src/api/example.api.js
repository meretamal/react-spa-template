import baseApi from './base.api';

const exampleApi = baseApi.injectEndpoints({
  tagTypes: ['Example'],
  endpoints: (build) => ({
    getResources: build.query({
      query: () => '/resources',
    }),
    createResource: build.mutation({
      query: (body) => ({
        url: '/resources',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Example'],
    }),
  }),
  overrideExisting: false,
});

export const { useGetResourcesQuery, useCreateResourceMutation } = exampleApi;
