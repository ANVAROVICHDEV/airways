import React, { useEffect, useState } from "react";
import "./Charter_Acardin.scss";
import { ApiService } from "../../service/api.service";
import { Accordion, AccordionDetails, AccordionSummary, Stack } from "@mui/material";
import { Typography } from "antd";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



const Charter_Acardin = () => {
  //////////////////////////////////////
  const [charterss, setCharterss] = useState();
  useEffect(() => {
    const getData = async () => {
      const data = await ApiService.fetching("charters");
      setCharterss(data);
    };
    getData();

    document.documentElement.scrollTop = 0;
  }, []);

  //////////////////////////////////////

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [num , setNum] = useState(1)

  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      justifyContent={"center"}
      gap={"30px"}
      mt={5}
    >
      {charterss &&
        charterss.map((charters , idx) => (
          <Accordion
            expanded={expanded === `panel${idx + 1}`}
            onChange={handleChange(`panel${idx + 1}`)}
			key={charters.id}
			sx={{h}}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                General settings
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                I am an accordion
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{width:'500px'}}>
			{
				charters.charters.length > 0 ? charters.charters.map((item) => (
					<Stack
					  direction={"row"}
					  justifyContent={"space-between"}
					  alignItems={"center"}
					>
					  <Stack direction={"row"} alignItems={"center"} gap={'30px'}>
						<h3>{item.city}  </h3>
					   
					  </Stack>
					  <Stack direction={"row"} gap={"10px"} alignItems={"center"}>
						<p>{item.date}</p>
						<button>{item.price}</button>
					  </Stack>
					</Stack>
				  )):<h1>No data</h1>
			}
            </AccordionDetails>
          </Accordion>
        ))}
    </Stack>
  );
};

export default Charter_Acardin;
