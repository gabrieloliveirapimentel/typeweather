import { useLocation } from "react-router";
import { CityResponse, ConditionsProps } from "../@types/types";
import { Box, Card, Grid, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getCurrentConditions, getFiveDailyForecast } from "../api/fetch";
import { formatExtensionDate, formatTime } from "../lib/utils";
import { theme } from "../theme/global";
import { CardDetails } from "../components/card-details";
import { CardForecast } from "../components/card-forecast";

export function Weather() {
  const location = useLocation();
  const data: CityResponse = location.state;

  const [conditions, setConditions] = useState<ConditionsProps>();
  //const [forecast, setForecast] = useState<any>();

  useEffect(() => {
    async function fetchData() {
      const conditionsResponse = await getCurrentConditions(data.Key);

      console.log(conditionsResponse);
      //const forecast = await getFiveDailyForecast(data.Key);

      setConditions(conditionsResponse[0]);
      //setForecast(forecast.DailyForecasts);
    }
    fetchData();
  }, [data]);

  if (!conditions) {
    return <div>Loading...</div>;
  }

  return (
    <Stack direction="row" gap={2} sx={{ padding: "24px" }}>
      <Stack>
        <Card
          sx={{
            backgroundColor: theme.palette.gray["gray-800"],
            width: "814px",
          }}
        >
          <Grid></Grid>
          <Box>Buscar local</Box>
          <Box>
            <Stack>
              <Grid>
                <Stack>
                  <Typography></Typography>
                  <Typography>
                    {formatExtensionDate(conditions.LocalObservationDateTime)}
                  </Typography>
                </Stack>
                <Typography>
                  {formatTime(conditions.LocalObservationDateTime)}
                </Typography>
              </Grid>
            </Stack>
          </Box>
        </Card>
      </Stack>
      <Stack gap={2}>
        <CardDetails />
        <CardForecast />
      </Stack>
    </Stack>
  );
}
