import { Card, Stack, Typography } from "@mui/material";
import { DayDetail } from "./day-detail";
import { theme } from "../theme/global";

export function CardForecast() {
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
          Previsão para 5 dias
        </Typography>
        <Stack direction="row">
          <DayDetail
            day="Amanhã"
            icon={1}
            detail="Céu limpo"
            temperature={{ min: 20, max: 30 }}
          />
          <DayDetail
            day="Quarta"
            icon={2}
            detail="Poucas nuvens"
            temperature={{ min: 22, max: 28 }}
          />
          <DayDetail
            day="Quinta"
            icon={3}
            detail="Nublado"
            temperature={{ min: 18, max: 25 }}
          />
          <DayDetail
            day="Sexta"
            icon={4}
            detail="Chuva"
            temperature={{ min: 19, max: 26 }}
          />
          <DayDetail
            day="Sábado"
            icon={2}
            detail="Poucas nuvens"
            temperature={{ min: 22, max: 28 }}
          />
        </Stack>
      </Stack>
    </Card>
  );
}
