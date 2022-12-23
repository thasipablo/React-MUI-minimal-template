import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Home = () => {
  return (
    <Box p={4}>
      <Typography variant="h1">Home h1</Typography>
      <Typography variant="h2">Home h2</Typography>
      <Typography variant="h3">Home h3</Typography>
      <Typography variant="h4">Home h4</Typography>
      <Typography variant="h5">Home h5</Typography>
      <Typography variant="h6">Home h6</Typography>
      <Button variant="contained">btn</Button>
    </Box>
  );
};

export default Home;
