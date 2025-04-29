import { Stack, Typography } from "@mui/material";
import { theme } from "../theme/global";

import { weatherOptions } from "../../weather-data.json";

interface DayDetailProps {
  day: string;
  icon: number;
  description?: string;
  temperature: {
    min: number;
    max: number;
  };
}

export function DayDetail({
  day,
  icon,
  description,
  temperature,
}: DayDetailProps) {
  const weather = weatherOptions.find((option) => option.icon === icon);

  return (
    <Stack
      justifyContent="space-between"
      alignItems="center"
      gap={1.2}
      sx={{ padding: "16px 1px" }}
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
        style={{ width: "72px" }}
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
          {description ? description : weather?.descriptionPtBr}
        </Typography>
        <Stack direction="row" gap={0.5}>
          <Typography
            sx={[
              theme.typography.headingSm,
              { color: theme.palette.gray["gray-100"] },
            ]}
          >
            {temperature.max}ºC /
          </Typography>
          <Typography
            sx={[
              theme.typography.headingSm,
              { color: theme.palette.gray["gray-200"] },
            ]}
          >
            {temperature.min}ºC
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
