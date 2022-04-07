import baseApi from './base.api';

const exampleApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getResources: build.query({
      query: () => '/resources',
      providesTags: [{ type: 'Example', id: 'LIST' }],
    }),
    createResource: build.mutation({
      query: (body) => ({
        url: '/resources',
        method: 'POST',
        body,
      }),
      invalidatesTags: (result) =>
        result ? [{ type: 'Example', id: 'LIST' }] : [],
    }),
  }),
  overrideExisting: false,
});

export const { useGetResourcesQuery, useCreateResourceMutation } = exampleApi;
