import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import config from '@/config';

const baseApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: config.apiUrl }),
  endpoints: () => ({}),
});

export default baseApi;
