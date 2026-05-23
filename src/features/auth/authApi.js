import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = import.meta.env.VITE_BASE_URL

export const authApi = createApi({
    reducerPath : 'authApi',
    baseQuery : fetchBaseQuery({
        baseUrl: baseUrl
    }),

    endpoints : (builder) => ({

        login: builder.mutation({
            query: (credentials) => ({
                url : '/auth/login',
                method :'POST',
                body : credentials
            })
        }),
        register: builder.mutation({
            query: (data) => ({
                url: '/auth/register',
                method: 'POST',
                body: data
            })
        })

    })
})


export const { useLoginMutation, useRegisterMutation } = authApi