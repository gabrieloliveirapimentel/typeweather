import { useLocation } from "react-router";
import { CityResponse } from "../@types/types";
import { Card, Grid, Stack } from "@mui/material";
import { useEffect } from "react";
import { getCurrentConditions, getFiveDailyForecast } from "../api/fetch";

export function Weather() {
  const location = useLocation();
  const data: CityResponse = location.state;

  useEffect(() => {
    async function fetchData() {
      const conditions = await getCurrentConditions(data.Key);
      const forecast = await getFiveDailyForecast(data.Key);

      console.log(conditions);
      console.log(forecast);
    }
    fetchData();
  }, [data]);

  return (
    <Grid>
      <Grid>
        <Card></Card>
      </Grid>
      <Stack>
        <Card></Card>
        <Card></Card>
      </Stack>
    </Grid>
  );
}
