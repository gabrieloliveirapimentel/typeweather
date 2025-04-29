import { useLocation } from "react-router";
import {
  City,
  CityResponse,
  ConditionsProps,
  ConditionsResponse,
  ForecastProps,
  ForecastResponse,
} from "../@types/types";
import { Card, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { getCurrentConditions, getFiveDailyForecast } from "../api/fetch";
import { theme } from "../theme/global";
import { CardDetails } from "../components/card-details";
import { CardForecast } from "../components/card-forecast";
import { CardCity } from "../components/card-city";
import { CardHeading } from "../components/card-heading";

export function Weather() {
  const location = useLocation();
  const data: CityResponse = location.state;

  const city: City = {
    id: data.Key,
    nome: data.LocalizedName,
    uf: data.AdministrativeArea.ID,
    state: data.AdministrativeArea?.LocalizedName,
    country: data.Country.LocalizedName,
  };

  const [conditions, setConditions] = useState<ConditionsProps>();
  const [forecast, setForecast] = useState<ForecastProps[]>([]);

  useEffect(() => {
    async function fetchData() {
      const conditions: ConditionsResponse[] = await getCurrentConditions(
        data.Key
      );
      const forecast: ForecastResponse = await getFiveDailyForecast(data.Key);

      setConditions(conditions[0]);
      setForecast(forecast.DailyForecasts);
    }
    fetchData();
  }, [data]);

  if (!conditions || !forecast) {
    return <div>Loading...</div>;
  }

  return (
    <Stack
      gap={2}
      direction={{ xs: "column", md: "row" }}
      sx={{ padding: "12px" }}
      alignItems="center"
      justifyContent="center"
    >
      <Stack>
        <Card
          sx={{
            backgroundColor: theme.palette.gray["gray-800"],
            padding: "24px",
            boxShadow: "none",
            borderRadius: "8px",
          }}
        >
          <Stack gap={2}>
            <CardHeading />
            <CardCity cityData={city} conditionData={conditions} />
          </Stack>
        </Card>
      </Stack>
      <Stack gap={2}>
        <CardDetails data={conditions} />
        <CardForecast data={forecast} />
      </Stack>
    </Stack>
  );
}
