import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../features/auth/authApi";
import { jobsApi } from "../features/job/jobsApi";
import { candidateApi } from "../features/job/candidateApi";

const store = configureStore({
    reducer : {
        [authApi.reducerPath]: authApi.reducer,
        [jobsApi.reducerPath]: jobsApi.reducer,
        [candidateApi.reducerPath]: candidateApi.reducer,
    }, 
    middleware : (getDefaultMiddleware)=>
        getDefaultMiddleware().concat(
            authApi.middleware,
            jobsApi.middleware,
            candidateApi.middleware,
        ),

})

export default store;