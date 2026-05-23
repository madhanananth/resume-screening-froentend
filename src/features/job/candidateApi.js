import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = import.meta.env.VITE_BASE_URL

export const candidateApi = createApi({
    reducerPath: "candidateApi",

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
    tagTypes: ["Candidates"],

    endpoints: (builder) => ({

        uploadResumes: builder.mutation({
            query: ({ job_id, files }) => {

                const formData = new FormData();

                formData.append("job_id", job_id);

                files.forEach((file) => {
                    formData.append("resumes", file);
                });

                return {
                    url: "/candidate/bulk/upload",
                    method: "POST",
                    body: formData
                };
            }, invalidatesTags: ["Candidates", "Jobs"] 
        }),
        getCandidatesByJob: builder.query({

            query: (job_id) => `/candidate/job/${job_id}`,
            providesTags: ["Candidates"]

        }),
        deleteCandidate: builder.mutation({
            query: (id) => ({
                url: `/candidate/${id}`,
                method: "DELETE"
            }),

            invalidatesTags: ["Candidates", "Jobs"]   
        })
    })
});

export const { useUploadResumesMutation , useGetCandidatesByJobQuery , useDeleteCandidateMutation} = candidateApi;