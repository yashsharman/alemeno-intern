import Accordion from "@mui/material/Accordion";
import { Box, Typography } from "@mui/material";

import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function AccordionCompoment({ accordionData, heading }) {
  return (
    <Box width={"100%"} py={1}>
      <Typography fontSize={"1.5rem"} fontWeight={"bold"} textAlign={"left"}>{heading}</Typography>
      {accordionData.map((ele) => {
        return (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              

            >
              <Typography color={"gray"}>Week {ele.week}: </Typography>
              <Typography fontWeight={"bold"} >{ele.topic}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography textAlign={"left"}>{ele.content}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
}

export default AccordionCompoment;
