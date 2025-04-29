import { Stack, Typography } from "@mui/material";
import { formatExtensionDate, formatTime } from "../lib/utils";
import { Dot } from "@phosphor-icons/react";

import { weatherOptions } from "../../weather-data.json";
import { theme } from "../theme/global";
import {
  City,
  ConditionsProps,
  FormattedCityDetailsProps,
} from "../@types/types";

export interface CardCityProps {
  cityData: City;
  conditionData: ConditionsProps;
}

export function CardCity({ cityData, conditionData }: CardCityProps) {
  const city: FormattedCityDetailsProps = {
    name: cityData.nome ? cityData.nome : "",
    state: cityData.state ? cityData.state : "",
    country: cityData.country ? cityData.country : "",
    datetime: conditionData.LocalObservationDateTime
      ? conditionData.LocalObservationDateTime
      : "",
    temperature: {
      max: conditionData.TemperatureSummary.Past6HourRange.Maximum.Metric.Value
        ? conditionData.TemperatureSummary.Past6HourRange.Maximum.Metric.Value
        : 0,
      min: conditionData.TemperatureSummary.Past6HourRange.Minimum.Metric.Value
        ? conditionData.TemperatureSummary.Past6HourRange.Minimum.Metric.Value
        : 0,
      current: conditionData.Temperature.Metric.Value
        ? conditionData.Temperature.Metric.Value
        : 0,
    },
    isDayTime: conditionData.IsDayTime ? conditionData.IsDayTime : false,
    icon: conditionData.WeatherIcon ? conditionData.WeatherIcon : 1,
  };

  const weather = weatherOptions.find((option) => option.icon === city.icon);

  return (
    <Stack
      justifyContent="space-between"
      sx={{
        backgroundImage: `url(${weather?.background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "32px",
        borderRadius: "8px",
        height: { xs: "316px", md: "516px" },
      }}
    >
      <Stack justifyContent="space-between" gap={1}>
        <Stack justifyContent="space-between" direction="row">
          <Typography sx={theme.typography.headingMd}>
            {city.name}, {city.state ? city.state : city.country}
          </Typography>
          <Typography sx={theme.typography.headingMd}>
            {formatTime(city.datetime)}
          </Typography>
        </Stack>
        <Typography sx={theme.typography.textMd}>
          {formatExtensionDate(city.datetime)}
        </Typography>
      </Stack>
      <Stack
        justifyContent="space-between"
        direction="row"
        alignItems="center"
        gap={2}
      >
        <Stack>
          <Typography sx={theme.typography.headingHg}>
            {city.temperature.current}ºC{" "}
          </Typography>
          <Stack direction="row" alignItems="center">
            <Typography sx={theme.typography.headingMd}>
              {city.temperature.max}ºC / {city.temperature.min}ºC
            </Typography>
            <Dot color={theme.palette.gray["gray-200"]} size={42} />
            <Typography sx={theme.typography.textLg}>
              {weather?.descriptionPtBr}
            </Typography>
          </Stack>
        </Stack>
        <img
          src={weather?.iconPath}
          alt="weather-icon"
          style={{ width: "140px" }}
        />
      </Stack>
    </Stack>
  );
}
