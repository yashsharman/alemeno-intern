import { createSlice , createSelector} from "@reduxjs/toolkit";
import { GetData } from "../../utils/firebase";
export const allCourseSlice = createSlice({
    name: 'AllCourses',
    initialState: await GetData(),
    reducers:{
       
    }
})

export const allCoursesSelector = createSelector((state)=> state.allCourse , (state)=> state)

export default allCourseSlice.reducer;