import { Typography, Card, Grid, Box } from "@mui/material";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  completeCourse,
  userCourseSelector,
} from "../../reduxContainer/slices/userCourses";

function ImageCard({ course, dashboard }) {
  const userCourse = useSelector(userCourseSelector);
  const dispatch = useDispatch();
  const handleCompletation = (course) => {
    const index = userCourse.indexOf(course);
    dispatch(completeCourse({ index, course }));
  };
  return (
    <Grid item sx={{ width: "90%" }} py={2}>
      <Card
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "start",
          justifyContent: "center",
          padding: 1,
        }}
      >
        <img src={course.thumbnail} style={{ width: "100%" }} alt="img" />
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          width={"100%"}
          p={1}
          gap={2}
        >
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box>
              <Typography
                color={"black"}
                textAlign="left"
                fontSize={"large"}
                fontWeight={"bold"}
              >
                {course.name}
              </Typography>
              <Typography color={"black"} textAlign="left" fontSize={"medium"}>
                {course.description}
              </Typography>
              <Typography color={"gray"} textAlign="left" fontSize={"medium"}>
                By: {course.instructor}
              </Typography>
              <Typography color={"gray"} textAlign="left" fontSize={"small"}>
                Schedule: {course.schedule}
              </Typography>
              {dashboard && (
                <Box display={"flex"} py={2}>
                  {course.completed ? (
                    <Button variant="contained" disabled>
                      Completed
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      color="success"
                      onClick={() => handleCompletation(course)}
                    >
                      Make as Complete
                    </Button>
                  )}
                </Box>
              )}
            </Box>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          ></Box>
        </Box>
      </Card>
    </Grid>
  );
}

export default ImageCard;
