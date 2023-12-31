import { useSelector } from "react-redux";
import Navbar from "../navbar/Navbar";
import CardContainer from "../cardContainer/CardContainer";
import { Typography } from "@mui/material";

import { userCourseSelector } from "../../reduxContainer/slices/userCourses";

function Dashboard() {
  const userCourse = useSelector(userCourseSelector);

  return (
    <>
      <Navbar />
      <Typography variant="h3" pt={6}>
        Enrolled Courses:
      </Typography>
      <CardContainer courses={userCourse} dashboard={true} />
    </>
  );
}

export default Dashboard;
