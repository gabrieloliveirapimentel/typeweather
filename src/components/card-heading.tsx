import { theme } from "../theme/global";
import logoImg from "../assets/logo.svg";
import { Box, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router";

export function CardHeading() {
  const navigate = useNavigate();

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
        onClick={() => navigate("/")}
        sx={{
          backgroundColor: theme.palette.gray["gray-600"],
          height: "56px",
          width: "100%",
          display: "flex",
          borderRadius: "8px",
          padding: "18px 20px",
          cursor: "pointer",
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
