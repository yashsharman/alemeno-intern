import { createSlice, createSelector } from "@reduxjs/toolkit";

export const userCourseSlice = createSlice({
  name: "UserCourse",
  initialState: [],
  reducers: {
    addCourse: (state, action) => {
      state.push(action.payload);
    },
    completeCourse: (state, action) => {
      const {index, course}= action.payload
      state.splice(index,1, {...course, completed: true});
    },
  },
});

export const userCourseSelector = createSelector(
  (state) => state.userCourse,
  (state) => state
);

export const { addCourse, completeCourse } = userCourseSlice.actions;

export default userCourseSlice.reducer;
