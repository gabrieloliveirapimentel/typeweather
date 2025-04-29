import { createTheme } from "@mui/material";
import backgroundImg from "../assets/background.png";

const base = {
  palette: {
    primary: {
      main: "#8FB2F5",
      dark: "#1A1D23",
    },
    white: "#FFFFFF",
    gray: {
      "gray-100": "#FAFAFA",
      "gray-200": "#BFBFD4",
      "gray-300": "#ABABC4",
      "gray-400": "#7F7F98",
      "gray-500": "#3B3B54",
      "gray-600": "#22222F",
      "gray-700": "#1C1C27",
      "gray-800": "#16161F",
      "gray-900": "#13131A",
    },
  },
  typography: {
    fontFamily: `'Nunito', sans-serif`,
    headingHg: {
      fontSize: "72px",
      fontWeight: 900,
      lineHeight: "100%",
    },
    headingXl: {
      fontSize: "32px",
      fontWeight: 900,
      lineHeight: "120%",
    },
    headingLg: {
      fontSize: "30px",
      fontWeight: 700,
      lineHeight: "140%",
    },
    headingMd: {
      fontSize: "14px",
      fontWeight: 700,
      lineHeight: "140%",
    },
    headingSm: {
      fontSize: "14px",
      fontWeight: 700,
      lineHeight: "140%",
    },
    headingXs: {
      fontSize: "12px",
      fontWeight: 700,
      lineHeight: "140%",
    },
    textLg: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "140%",
    },
    textMd: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "140%",
    },
    textSm: {
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: "140%",
    },
    textXs: {
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: "140%",
    },
  },
};

export const theme = createTheme(base, {
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: base.palette.gray["gray-100"],
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: base.palette.gray["gray-100"],
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: base.palette.gray["gray-200"],
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            color: base.palette.gray["gray-100"],
            backgroundColor: base.palette.gray["gray-600"],
            borderRadius: "8px",

            "&.Mui-focused fieldset": {
              borderColor: base.palette.primary.main,
            },
            "&:hover fieldset": {
              border: `2px solid ${base.palette.primary.main}`,
            },
          },
        },
      },
    },
  },
});
