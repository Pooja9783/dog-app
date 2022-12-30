import React, { useState, useEffect } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Grid, Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export default function Home() {
  const [breed, setBreed] = useState([]);
  useEffect(() => {
    const fetchDog = async () => {
      try {
        const res = await fetch("https://dog.ceo/api/breeds/list/all");
        const dataApi = await res.json();
        setBreed(dataApi.message);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchDog();
  }, []);
  console.log(breed);
  return (
    <div>
      <Box sx={{ flexGrow: 1 }} m={2}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={2} sm={4} md={4}>
            <Item>australian : {breed.australian}</Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Item>buhund : {breed.buhund}</Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Item>bulldog : {breed?.bulldog?.join(" ")}</Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Item>bullterrier : {breed?.bullterrier?.join(" ")}</Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Item>cattledog : {breed?.cattledog?.join(" ")}</Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Item>collie : {breed?.collie?.join(" ")}</Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Item>corgi : {breed?.corgi?.join(" ")}</Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Item>dane : {breed?.dane?.join(" ")}</Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Item>deerhound : {breed?.deerhound?.join(" ")}</Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Item>elkhound : {breed?.elkhound?.join(" ")}</Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Item>finnish : {breed?.finnish?.join(" ")}</Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Item>frise : {breed.frise}</Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Item>greyhound : {breed.greyhound}</Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Item>hound : {breed?.hound?.join(" ")}</Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Item>mastiff : {breed?.mastiff?.join(" ")}</Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Item>mountain : {breed?.mountain?.join(" ")}</Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Item>ovcharka : {breed?.ovcharka?.join(" ")}</Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Item>pinscher : {breed?.pinscher?.join(" ")}</Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Item>pointer : {breed?.pointer?.join(" ")}</Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Item>poodle : {breed?.poodle?.join(" ")}</Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Item>retriever : {breed?.retriever?.join(" ")}</Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Item>ridgeback : {breed?.ridgeback?.join(" ")}</Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Item>schnauzer : {breed?.schnauzer?.join(" ")}</Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Item>segugio : {breed?.segugio?.join(" ")}</Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Item>setter : {breed?.setter?.join(" ")}</Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Item>sheepdog : {breed?.sheepdog?.join(" ")}</Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Item>spaniel : {breed?.spaniel?.join(" ")}</Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Item>spitz : {breed?.spitz?.join(" ")}</Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Item>springer : {breed?.springer?.join(" ")}</Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Item>terrier : {breed?.terrier?.join(" ")}</Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Item>waterdog : {breed?.waterdog?.join(" ")}</Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Item>wolfhound : {breed?.wolfhound?.join(" ")}</Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
