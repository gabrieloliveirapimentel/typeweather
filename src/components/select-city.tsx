import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import {
  Box,
  Typography,
  TextField,
  Autocomplete,
  CircularProgress,
} from "@mui/material";

import { CityResponse } from "../@types/types";
import { theme } from "../theme/global";

import { api } from "../lib/axios";
import { env } from "../env";

interface SelectCityProps {
  goTo: string;
}

export default function SelectCity({ goTo }: SelectCityProps) {
  const [options, setOptions] = useState<CityResponse[]>([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const navigate = useNavigate();

  const debounceTimer = useRef<number | null>(null);

  const handleEnterKey = (value: CityResponse) => {
    if (inputValue) {
      try {
        navigate(`${goTo}`, {
          state: { ...value },
        });
      } catch {
        setInputValue("");
      }
    }
  };

  useEffect(() => {
    if (!inputValue) {
      setOptions([]);
      return;
    }

    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    debounceTimer.current = setTimeout(async () => {
      const API_KEY = env.VITE_API_KEY;
      const API_VERSION = env.VITE_API_VERSION;
      setLoading(true);

      try {
        const response = await api.get(
          `/locations/${API_VERSION}/cities/autocomplete`,
          {
            params: {
              apikey: API_KEY,
              q: inputValue,
            },
          }
        );
        setOptions(response.data);
      } catch (err) {
        console.error("Erro ao buscar cidades:", err);
      } finally {
        setLoading(false);
      }
    }, 500);

    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, [inputValue]);

  return (
    <Autocomplete
      sx={{ width: 420 }}
      popupIcon={null}
      open={isOpen}
      onOpen={() => setIsOpen(true)}
      onClose={() => setIsOpen(false)}
      onInputChange={(_, value) => setInputValue(value)}
      onChange={(_, value) => {
        if (value) handleEnterKey(value);
      }}
      options={options}
      loading={loading}
      clearIcon={null}
      loadingText={
        <Box
          component="li"
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography variant="body1">Carregando...</Typography>
        </Box>
      }
      noOptionsText={
        <Box
          component="li"
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography variant="body1">Nenhuma cidade encontrada</Typography>
        </Box>
      }
      isOptionEqualToValue={(opt, val) => opt.Key === val.Key}
      slotProps={{
        paper: {
          sx: {
            color: theme.palette.gray["gray-100"],
            backgroundColor: theme.palette.gray["gray-500"],
            border: `2px solid ${theme.palette.gray["gray-600"]}`,
            boxShadow: "none",
            borderRadius: "6px",
            marginTop: "4px",
          },
        },
      }}
      getOptionLabel={(option) =>
        `${option.LocalizedName} - ${option.AdministrativeArea?.ID}, ${option.Country.LocalizedName}`
      }
      renderOption={(props, option) => (
        <Box
          {...props}
          component="li"
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "12px !important",
            borderBottom: `1px solid ${theme.palette.gray["gray-600"]}`,
          }}
        >
          <Typography variant="body1">
            {option.LocalizedName} - {option.AdministrativeArea?.ID},{" "}
            {option.Country.LocalizedName}
          </Typography>
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          className="input-base"
          placeholder="Selecione uma cidade"
          slotProps={{
            input: {
              ...params.InputProps,
              endAdornment: (
                <>
                  {loading ? (
                    <CircularProgress color="primary" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            },
          }}
        />
      )}
    />
  );
}
