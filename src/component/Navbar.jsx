import React from "react";
import { Link } from "react-router-dom";

import { Grid, AppBar, Box } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Box sx={{ flexGrow: 1, bgcolor: "#1A0000", color: "#F5EDCE" }} p={2}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            Puppy Love
          </Grid>
          <Grid item xs={4} md={8} sx={{ display: "flex" }}>
            <Grid mr={4}>
              {" "}
              <Link to="/" style={{ textDecoration: "none", color: "gray" }}>
                Home
              </Link>
            </Grid>
            <Grid mr={4}>
              {" "}
              <Link
                to="/puppy"
                style={{ textDecoration: "none", color: "gray" }}
              >
                Puppy
              </Link>
            </Grid>
            <Grid mr={4}>
              {" "}
              <Link
                to="/search"
                style={{ textDecoration: "none", color: "gray" }}
              >
                Search
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </AppBar>
  );
}
