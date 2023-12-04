import { useState } from "react";
import { CssBaseline } from "@mui/material";
import CardContainer from "../cardContainer/CardContainer";
import Navbar from "../navbar/Navbar";
import HeroSearch from "../heroSearch/HeroSearch";
import { allCoursesSelector } from "../../reduxContainer/slices/allCources";
import { useSelector } from "react-redux";


function HomePage() {
  const allCourses = useSelector(allCoursesSelector);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(allCourses);

  const handleSearchInput = event => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    const filteredCourses = allCourses.filter(
      course =>
        course.name.toLowerCase().includes(searchTerm) ||
        course.instructor.toLowerCase().includes(searchTerm)
    );
    setSearchResults(filteredCourses);
  };

  return (
    <>
      <CssBaseline />
      <Navbar handleSearchInput={handleSearchInput} />
      <HeroSearch handleSearchInput={handleSearchInput} />
      <CardContainer courses={searchResults}/>
    </>
  )
}

export default HomePage