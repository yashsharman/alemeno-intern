import { configureStore } from "@reduxjs/toolkit";
import userCourseReducer from "./slices/userCourses";
import allCourcesReducer from "./slices/allCources";
export const  store = configureStore({
    reducer:{
        userCourse: userCourseReducer,
        allCourse: allCourcesReducer
    },
    devTools: true,
})