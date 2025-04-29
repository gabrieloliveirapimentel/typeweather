import { Card, Stack, Typography } from "@mui/material";
import { DayDetail } from "./day-detail";
import { theme } from "../theme/global";
import { ForecastProps, FormattedDayDetail } from "../@types/types";
import { convertToCelsius, formatForecastDate } from "../lib/utils";

interface CardForecastProps {
  data: ForecastProps[];
}

export function CardForecast({ data }: CardForecastProps) {
  const days: FormattedDayDetail[] = data.map((day) => ({
    day: day.Date ? formatForecastDate(day.Date) : "",
    icon: day.Day.Icon ? day.Day.Icon : 1,
    description: day.Day?.ShortPhrase,
    temperature: {
      min: day.Temperature.Minimum.Value
        ? convertToCelsius(day.Temperature.Minimum.Value)
        : 0,
      max: day.Temperature.Maximum.Value
        ? convertToCelsius(day.Temperature.Maximum.Value)
        : 0,
    },
  }));

  const countDays = days.length;

  return (
    <Card
      sx={{
        backgroundColor: theme.palette.gray["gray-800"],
        borderRadius: "8px",
        boxShadow: "none",
        padding: "24px",
      }}
    >
      <Stack>
        <Typography
          sx={[
            theme.typography.textMd,
            { color: theme.palette.gray["gray-200"], marginBottom: "20px" },
          ]}
        >
          Previsão para {countDays} dias
        </Typography>
        <Stack direction="row" alignItems="center" gap={1}>
          {days.map((day, index) => (
            <DayDetail
              key={index}
              day={day.day}
              icon={day.icon}
              description={day.description}
              temperature={{
                min: day.temperature.min,
                max: day.temperature.max,
              }}
            />
          ))}
        </Stack>
      </Stack>
    </Card>
  );
}
