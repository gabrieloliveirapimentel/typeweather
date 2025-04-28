import { Icon, Stack, Typography } from "@mui/material";
import { formatExtensionDate, formatTime } from "../lib/utils";
import { Dot } from "@phosphor-icons/react";

import { weatherOptions } from "../../weather-data.json";
import { theme } from "../theme/global";

interface CardCityProps {
  city: string;
  state?: string;
  country?: string;
  datetime: string;
  temperature: {
    min: number;
    max: number;
    current: number;
  };
  isDayTime: boolean;
  icon: number;
}

export function CardCity({
  city,
  state,
  country,
  datetime,
  temperature,
  icon,
}: CardCityProps) {
  const weather = weatherOptions.find((option) => option.icon === icon);

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
        height: "616px",
      }}
    >
      <Stack justifyContent="space-between" gap={1}>
        <Stack justifyContent="space-between" direction="row">
          <Typography sx={theme.typography.headingMd}>
            {city}, {state ? state : country}
          </Typography>
          <Typography sx={theme.typography.headingMd}>
            {formatTime(datetime)}
          </Typography>
        </Stack>
        <Typography sx={theme.typography.textMd}>
          {formatExtensionDate(datetime)}
        </Typography>
      </Stack>
      <Stack justifyContent="space-between" direction="row">
        <Stack gap={1.4}>
          <Typography sx={theme.typography.headingHg}>
            {temperature.current}ºC{" "}
          </Typography>
          <Stack direction="row" alignItems="center">
            <Typography sx={theme.typography.headingMd}>
              {temperature.max}ºC / {temperature.min}ºC
            </Typography>
            <Dot color={theme.palette.gray["gray-200"]} size={42} />
            <Typography sx={theme.typography.textLg}>
              {weather?.descriptionPtBr}
            </Typography>
          </Stack>
        </Stack>
        <img src={weather?.iconPath} alt="weather-icon" />
      </Stack>
    </Stack>
  );
}
