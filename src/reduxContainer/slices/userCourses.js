import { createSlice, createSelector } from "@reduxjs/toolkit";

export const userCourseSlice = createSlice({
  name: "UserCourse",
  initialState: [],
  reducers: {
    addCourse: (state, action) => {
      state.push(action.payload);
    },
    completeCourse: (state, action) => {
        
        const { courseId } = action.payload;
        const currentState = state
        const courseToUpdate = currentState.find((course) => course.id == courseId);
        console.log(currentState)
        console.log(courseToUpdate)
        if (courseToUpdate) {
          return state.map((course) =>
            course.id == courseId ? { ...course, completed: true } : course
          );
        }
        return state;
    },
  },
});

export const userCourseSelector = createSelector(
  (state) => state.userCourse,
  (state) => state
);

export const { addCourse , completeCourse } = userCourseSlice.actions;

export default userCourseSlice.reducer;
