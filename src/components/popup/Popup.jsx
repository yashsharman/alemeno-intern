import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Button, Container, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { useDispatch, useSelector } from "react-redux";
import { addCourse, userCourseSelector } from "../../reduxContainer/slices/userCourses";

import Navbar from "../navbar/Navbar";
import AccordionCompoment from "../Accordion/Accordion";
import { allCoursesSelector } from "../../reduxContainer/slices/allCources";

function Popup() {
  const [courseData, setCourseData] = useState();
  const { id } = useParams();
  const allCourses = useSelector(allCoursesSelector)  
  const userCourse = useSelector(userCourseSelector)  
  const dispatch = useDispatch();

  useEffect(() => {
    allCourses.forEach((course) => {
      if (id == course.id) {
        setCourseData(course);
      }
    });
  }, []);

  const handleEnrollments = () => {
    dispatch(addCourse(courseData));
    alert(`${courseData.name} is added to your DashBoard!`);
  };

  return (
    <>
      <Navbar />

      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {courseData && (
          <>
            <img
              src={courseData.thumbnail}
              alt="regularimage"
              style={{ height: "50vh" }}
            />
            <Box
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              width={"100%"}
              p={1}
              bgcolor={"white"}
            >
              <Box
                display={"flex"}
                flexDirection={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Box>
                  <Typography variant="h6">{courseData.name}</Typography>
                  <Typography
                    fontSize={"small"}
                    color={"gray"}
                    textAlign={"left"}
                  >
                    by {courseData.instructor}
                  </Typography>
                </Box>
              </Box>
              <Box
                display={"flex"}
                alignContent={"center"}
                justifyContent={"center"}
                flexDirection={"row"}
                gap={2}
                py={1}
              >
                <Button
                  onClick={()=>handleEnrollments()}
                  variant="contained"
                  color="success"
                  startIcon={<DownloadIcon />}
                >
                  Enroll
                </Button>
              </Box>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              width={"100%"}
              p={1}
              bgcolor={"white"}
            >
              <Typography textAlign={"left"}>
                Description: {courseData.description}
              </Typography>
              <Box
                display={"flex"}
                flexDirection={"col"}
                alignItems={"center"}
                justifyContent={"space-between"}
                gap={1}
              >
                <Box>
                  <Typography color={"gray"} textAlign={"left"}>
                    Enrollment Status:
                  </Typography>
                  <Typography textAlign={"left"}>
                    {courseData.enrollmentStatus}
                  </Typography>
                </Box>
                <Box>
                  <Typography color={"gray"} textAlign={"left"}>
                    Location:
                  </Typography>
                  <Typography textAlign={"left"}>
                    {courseData.location}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box width={"100%"} p={1} bgcolor={"white"}>
              <Typography textAlign={"left"}>Schedule:</Typography>
              <Box width={"max-content"}>
                {courseData.prerequisites.map((ele) => {
                  return (
                    <Typography color={"gray"} textAlign={"left"}>
                      • {ele}
                    </Typography>
                  );
                })}
              </Box>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              width={"100%"}
              p={1}
              bgcolor={"white"}
            >
              <Typography color={"gray"} textAlign={"left"}>
                Schedule:
              </Typography>
              <Typography textAlign={"left"}>{courseData.schedule}</Typography>
            </Box>
            <AccordionCompoment
              accordionData={courseData.syllabus}
              heading={"Syllabus"}
            />
          </>
        )}
      </Container>
    </>
  );
}

export default Popup;
