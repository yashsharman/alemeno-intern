import { Grid, Container } from "@mui/material";
import ImageCard from "../imageCard/ImageCard";
import { Link } from "react-router-dom/dist";

function CardContainer({ courses, dashboard, handleCompletation }) {
  return (
    <Container sx={{ my: 10, cursor: "pointer" }}>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        padding={1}
        display="flex"
        flexDirection={"row"}
      >
        {courses &&
          courses.map((course) => {
            if (dashboard) {
              return (
                  <ImageCard course={course} dashboard={dashboard}/>
              );
            }
            return (
              <Link to={`course-details/${course.id}`}>
                <ImageCard course={course} />
              </Link>
            );
          })}
      </Grid>
    </Container>
  );
}

export default CardContainer;
