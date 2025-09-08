import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import type { Pokemon } from './types'

// Define a service using a base URL and expected endpoints
export const customerApi = createApi({
  reducerPath: 'customerApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASE_URL + "customer" }),
  
  endpoints: (build) => ({
    deneme: build.query<any,any>({
      query: () => `/deneme`,
    }),

    login:build.mutation<any,any>({
      
      query:(body) => ({
        url : "/login",
        method:"POST",
        body:body
      }),

    }),

    sendEmail:build.mutation<any,any>({
        
        query:(body) => ({
          url:"/sendEmail",
          method:"POST",
          body:body
        }),

      }),
  
    verifyEmail : build.mutation({
        query:(body) => ({
          url:"/verifyEmail",
          method:"POST",
          body:body
        })
      }),

    createCustomer:build.mutation({

      query:(body) => ({
        url:"/createCustomer",
        method:"POST",
        body:body
      })

    })



    }),
})

export const { useDenemeQuery , useLoginMutation , useSendEmailMutation , useVerifyEmailMutation , useCreateCustomerMutation} = customerApi