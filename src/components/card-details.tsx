import { Card, Stack, Typography } from "@mui/material";
import { theme } from "../theme/global";
import {
  CloudRain,
  Drop,
  SunDim,
  ThermometerSimple,
  Wind,
} from "@phosphor-icons/react";

export function CardDetails() {
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
          <Typography sx={theme.typography.headingSm}>26ºC</Typography>
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
              Probabilidade de chuva
            </Typography>
          </Stack>
          <Typography sx={theme.typography.headingSm}>0%</Typography>
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
          <Typography sx={theme.typography.headingSm}>8 km/h</Typography>
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
          <Typography sx={theme.typography.headingSm}>40%</Typography>
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
          <Typography sx={theme.typography.headingSm}>5</Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
