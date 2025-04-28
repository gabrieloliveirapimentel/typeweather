import { theme } from "../theme/global";
import logoImg from "../assets/svg/logo.svg";
import { Box, Stack, Typography } from "@mui/material";

export function CardHeading() {
  return (
    <Stack direction="row" alignItems="center" gap={2}>
      <Box
        sx={{
          backgroundColor: theme.palette.gray["gray-600"],

          borderRadius: "8px",
          padding: "18px 14px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={logoImg} />
      </Box>
      <Box
        sx={{
          backgroundColor: theme.palette.gray["gray-600"],
          height: "56px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          borderRadius: "8px",
          padding: "18px 20px",
        }}
      >
        <Typography
          sx={[
            theme.typography.textMd,
            { color: theme.palette.gray["gray-400"] },
          ]}
        >
          Buscar local
        </Typography>
      </Box>
    </Stack>
  );
}
