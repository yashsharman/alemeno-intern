import { Typography, AppBar, Grid, Container, Box, Input } from "@mui/material";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

function Navbar({ handleSearchInput }) {
  return (
    <AppBar position="relative">
      <Container>
        <Grid
          container
          spacing={10}
          justifyContent="space-around"
          alignItems="center"
          padding={1}
        >
            <Grid item>
          <Link to={`/`}>
              <Typography variant="h4" fontFamily="pattaya">
                Learn It
              </Typography>
          </Link>
            </Grid>
          <Grid item display="flex" gap={4} padding={0}>
            <Box
              display="flex"
              alignItems={"center"}
              justifyContent={"center"}
              bgcolor={"#ECECEC"}
              borderRadius={"6px"}
              color={"gray"}
              gap={1}
              p={1}
            >
              <SearchIcon fontSize="medium" />

              <Input
                disabled={false}
                variant="plain"
                size="sm"
                onChange={(e) => handleSearchInput(e)}
                placeholder="Search course here"
                sx={{ padding: "0" }}
              />
            </Box>
          </Grid>
          <Grid item display="flex" alignItems="center" justifyContent="center">
            <Link to={"/dashboard"}>
              <Button variant="contained" sx={{ color: "black" }}>
                DashBoard
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
}

export default Navbar;
