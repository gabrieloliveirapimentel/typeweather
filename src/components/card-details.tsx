import { Card, Stack, Typography } from "@mui/material";
import { theme } from "../theme/global";
import {
  CloudRain,
  Drop,
  SunDim,
  ThermometerSimple,
  Wind,
} from "@phosphor-icons/react";
import { ConditionsProps, FormattedDailyProps } from "../@types/types";

interface CardDetailsProps {
  data: ConditionsProps;
}

export function CardDetails({ data }: CardDetailsProps) {
  const details: FormattedDailyProps = {
    feelTemperature: data.RealFeelTemperature.Metric.Value
      ? `${data.RealFeelTemperature.Metric.Value}ºC`
      : "",
    precipitation: {
      value: data.PrecipitationSummary.Precipitation.Metric.Value
        ? data.PrecipitationSummary.Precipitation.Metric.Value
        : 0,
      unit: data.PrecipitationSummary.Precipitation.Metric.Unit
        ? data.PrecipitationSummary.Precipitation.Metric.Unit
        : "",
    },
    wind: {
      value: data.Wind.Speed.Metric.Value ? data.Wind.Speed.Metric.Value : 0,
      unit: data.Wind.Speed.Metric.Unit ? data.Wind.Speed.Metric.Unit : "",
    },
    humidity: data.RelativeHumidity ? `${data.RelativeHumidity}%` : "",
    uvIndex: data.UVIndex ? data.UVIndex : 0,
  };

  return (
    <Card
      sx={{
        backgroundColor: theme.palette.gray["gray-800"],
        borderRadius: "8px",
        boxShadow: "none",
        padding: "28px 24px 8px 24px",
      }}
    >
      <Stack>
        <Typography
          sx={[
            theme.typography.textMd,
            { color: theme.palette.gray["gray-200"], marginBottom: "20px" },
          ]}
        >
          Detalhes do clima hoje
        </Typography>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{
            paddingBlock: "16px",
            borderBottom: `1px solid ${theme.palette.gray["gray-700"]}`,
          }}
        >
          <Stack direction="row" gap={1}>
            <ThermometerSimple
              size={24}
              color={theme.palette.gray["gray-500"]}
            />
            <Typography
              sx={[
                theme.typography.headingXs,
                { color: theme.palette.gray["gray-200"] },
              ]}
            >
              Sensação térmica
            </Typography>
          </Stack>
          <Typography sx={theme.typography.headingSm}>
            {details.feelTemperature}
          </Typography>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{
            paddingBlock: "16px",
            borderBottom: `1px solid ${theme.palette.gray["gray-700"]}`,
          }}
        >
          <Stack direction="row" gap={1}>
            <CloudRain size={24} color={theme.palette.gray["gray-500"]} />
            <Typography
              sx={[
                theme.typography.headingXs,
                { color: theme.palette.gray["gray-200"] },
              ]}
            >
              Precipitação
            </Typography>
          </Stack>
          <Typography sx={theme.typography.headingSm}>
            {details.precipitation.value}
            {details.precipitation.unit}
          </Typography>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{
            paddingBlock: "16px",
            borderBottom: `1px solid ${theme.palette.gray["gray-700"]}`,
          }}
        >
          <Stack direction="row" gap={1}>
            <Wind size={24} color={theme.palette.gray["gray-500"]} />
            <Typography
              sx={[
                theme.typography.headingXs,
                { color: theme.palette.gray["gray-200"] },
              ]}
            >
              Velocidade do vento
            </Typography>
          </Stack>
          <Typography sx={theme.typography.headingSm}>
            {details.wind.value}
            {details.wind.unit}
          </Typography>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{
            paddingBlock: "16px",
            borderBottom: `1px solid ${theme.palette.gray["gray-700"]}`,
          }}
        >
          <Stack direction="row" gap={1}>
            <Drop size={24} color={theme.palette.gray["gray-500"]} />
            <Typography
              sx={[
                theme.typography.headingXs,
                { color: theme.palette.gray["gray-200"] },
              ]}
            >
              Umidade do ar
            </Typography>
          </Stack>
          <Typography sx={theme.typography.headingSm}>
            {details.humidity}
          </Typography>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ paddingBlock: "16px" }}
        >
          <Stack direction="row" gap={1}>
            <SunDim size={24} color={theme.palette.gray["gray-500"]} />
            <Typography
              sx={[
                theme.typography.headingXs,
                { color: theme.palette.gray["gray-200"] },
              ]}
            >
              Índice UV
            </Typography>
          </Stack>
          <Typography sx={theme.typography.headingSm}>
            {details.uvIndex}
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
