import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = import.meta.env.VITE_BASE_URL

export const jobsApi = createApi({
    reducerPath: "jobsApi",

    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
        prepareHeaders: (headers) => {

            const token = localStorage.getItem("token");

            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }

            return headers;
        }
    }),
    tagTypes: ["Jobs"],

    endpoints: (builder) => ({

        getJobs: builder.query({
            query: () => "/jobs/",
            providesTags: ["Jobs"]
        }),

        createJob: builder.mutation({
            query: (job) => ({
                url: "/jobs/",
                method: "POST",
                body: job
            }), invalidatesTags: ["Jobs"]
        }),
        getJobById: builder.query({
            query: (id) => `/jobs/${id}`,
            providesTags: ["Jobs"]
        }),
        deleteJob: builder.mutation({
            query: (id) => ({
                url: `/jobs/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Jobs"]
        }),

    })
});

export const {
    useGetJobsQuery,
    useCreateJobMutation,
    useGetJobByIdQuery, 
    useDeleteJobMutation
} = jobsApi;