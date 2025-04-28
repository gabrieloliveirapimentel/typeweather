import { Stack, Typography } from "@mui/material";
import clearDay from "../assets/svg/clear_day.svg";
import cloudsDay from "../assets/svg/clouds_day.svg";
import cloudyDay from "../assets/svg/cloudy_day.svg";
import rainDay from "../assets/svg/rain_day.svg";
import snowDay from "../assets/svg/snow_day.svg";
import stormDay from "../assets/svg/storm_day.svg";
import { theme } from "../theme/global";

interface DayDetailProps {
  day: string;
  icon: number;
  detail: string;
  temperature: {
    min: number;
    max: number;
  };
}

export function DayDetail({ day, icon, detail, temperature }: DayDetailProps) {
  const ICON_OPTIONS: Record<number, string> = {
    1: clearDay,
    2: cloudsDay,
    3: cloudyDay,
    4: rainDay,
    5: stormDay,
    6: snowDay,
  };

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
        src={ICON_OPTIONS[icon]}
        alt="weather-icon"
        style={{ width: "100px" }}
      />
      <Stack gap={0.5} alignItems="center">
        <Typography
          sx={[
            theme.typography.textSm,
            { color: theme.palette.gray["gray-200"] },
          ]}
        >
          {detail}
        </Typography>
        <Stack direction="row" gap={1}>
          <Typography
            sx={[
              theme.typography.headingSm,
              { color: theme.palette.gray["gray-100"] },
            ]}
          >
            {temperature.min}ºC
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
