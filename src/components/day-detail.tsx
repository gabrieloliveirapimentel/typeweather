import { Stack, Typography } from "@mui/material";
import { theme } from "../theme/global";

import { weatherOptions } from "../../weather-data.json";

interface DayDetailProps {
  day: string;
  icon: number;
  temperature: {
    min: number;
    max: number;
  };
}

export function DayDetail({ day, icon, temperature }: DayDetailProps) {
  const weather = weatherOptions.find((option) => option.icon === icon);

  return (
    <Stack
      justifyContent="space-between"
      alignItems="center"
      gap={1.5}
      sx={{ padding: "28px 24px" }}
    >
      <Typography
        sx={[
          theme.typography.headingXs,
          { color: theme.palette.gray["gray-200"] },
        ]}
      >
        {day}
      </Typography>
      <img
        src={weather?.iconPath}
        alt="weather-icon"
        style={{ width: "100px" }}
      />
      <Stack gap={0.5} alignItems="center">
        <Typography
          sx={[
            theme.typography.textSm,
            {
              color: theme.palette.gray["gray-200"],
              textAlign: "center",
            },
          ]}
        >
          {weather?.descriptionPtBr}
        </Typography>
        <Stack direction="row" gap={1}>
          <Typography
            sx={[
              theme.typography.headingSm,
              { color: theme.palette.gray["gray-100"] },
            ]}
          >
            {temperature.min}ºC /
          </Typography>
          <Typography
            sx={[
              theme.typography.headingSm,
              { color: theme.palette.gray["gray-200"] },
            ]}
          >
            {temperature.max}ºC
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
