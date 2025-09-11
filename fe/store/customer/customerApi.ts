import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getCookie } from 'cookies-next';

// Define a service using a base URL and expected endpoints
export const customerApi = createApi({
  reducerPath: 'customerApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL + 'customer',
    prepareHeaders: (headers) => {
      headers.set('token', getCookie('token') as string);
      return headers;
    },
  }),

  endpoints: (build) => ({
    deneme: build.query<any, any>({
      query: () => `/deneme`,
    }),

    login: build.mutation<any, any>({
      query: (body) => ({
        url: '/login',
        method: 'POST',
        body: body,
      }),
    }),

    sendEmail: build.mutation<any, any>({
      query: (body) => ({
        url: '/sendEmail',
        method: 'POST',
        body: body,
      }),
    }),

    verifyEmail: build.mutation({
      query: (body) => ({
        url: '/verifyEmail',
        method: 'POST',
        body: body,
      }),
    }),

    createCustomer: build.mutation({
      query: (body) => ({
        url: '/createCustomer',
        method: 'POST',
        body: body,
      }),
    }),

    getProfile: build.query({
      query: () => ({
        url: `/profile`,
      }),
    }),

    updateProfile: build.mutation({
      query: (body) => ({
        url: '/updateProfile',
        method: 'POST',
        body: body,
      }),
    }),

    addAddress: build.mutation({
      query: (body) => ({
        url: '/addAddress',
        method: 'POST',
        body: body,
      }),
    }),

    getAddressList: build.query({
      query: () => `/addressList`,
    }),

    updatePassword: build.mutation({
      query: (body) => ({
        url: '/updatePassword',
        method: 'POST',
        body: body,
      }),
    }),
  }),
});

export const {
  useDenemeQuery,
  useLoginMutation,
  useSendEmailMutation,
  useVerifyEmailMutation,
  useCreateCustomerMutation,
  useGetProfileQuery,
  useUpdateProfileMutation,
  useAddAddressMutation,
  useGetAddressListQuery,
  useUpdatePasswordMutation,
} = customerApi;
