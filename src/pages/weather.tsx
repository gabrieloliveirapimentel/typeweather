import { useLocation } from "react-router";
import { City, CityResponse, ConditionsProps } from "../@types/types";
import { Box, Card, Stack, Typography } from "@mui/material";
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
            padding: "16px",
            boxShadow: "none",
            borderRadius: "8px",
          }}
        >
          <Stack gap={2}>
            <CardHeading />
            <CardCity
              city={city.nome}
              state={city.uf}
              country={city.country}
              datetime={conditions.LocalObservationDateTime}
              temperature={{
                min: conditions.TemperatureSummary.Past6HourRange.Maximum.Metric
                  .Value,
                max: conditions.TemperatureSummary.Past6HourRange.Minimum.Metric
                  .Value,
                current: conditions.Temperature.Metric.Value,
              }}
              isDayTime={conditions.IsDayTime}
              icon={conditions.WeatherIcon}
            />
          </Stack>
        </Card>
      </Stack>
      <Stack gap={2}>
        <CardDetails />
        <CardForecast />
      </Stack>
    </Stack>
  );
}
