import { Container, Stack, Typography } from "@mui/material";
import SelectCity from "../components/select-city";

import logoImg from "../assets/logo-ext.svg";
import { theme } from "../theme/global";

export function Home() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "32px",
        gap: "160px",
      }}
    >
      <img src={logoImg} alt="Logo" />
      <Stack
        sx={{
          gap: "56px",
        }}
      >
        <Stack gap={0.5} alignItems="center">
          <Typography
            component="span"
            sx={[
              theme.typography.headingLg,
              { display: "flex", flexDirection: "row" },
            ]}
          >
            Boas vindas ao
            <Typography
              sx={[
                theme.typography.headingLg,
                { color: theme.palette.primary.main, marginLeft: "8px" },
              ]}
            >
              TypeWeather
            </Typography>
          </Typography>
          <Typography
            sx={[
              theme.typography.textLg,
              { color: theme.palette.gray["gray-200"] },
            ]}
          >
            Escolha um local para ver a previsão do tempo
          </Typography>
        </Stack>

        <SelectCity goTo="/weather" />
      </Stack>
      <Stack />
    </Container>
  );
}
