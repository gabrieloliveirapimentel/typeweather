import { api } from "../lib/axios";
import { env } from "../env";

const API_KEY = env.VITE_API_KEY;
const API_VERSION = env.VITE_API_VERSION;

export async function getCities(value: string) {
    const data = await api.get(
        `/locations/${API_VERSION}/cities/autocomplete`,
        {
          params: {
            apikey: API_KEY,
            q: value,
          },
        }
      )

      return data;
}

export async function getCurrentConditions(key: string) {
    const { data } = await api.get(
        `/currentconditions/${API_VERSION}/${key}`,{
            params: {
                apikey: API_KEY,
                language: "pt-br",
                details: true,
            }
        })

    return data;
}

export async function getFiveDailyForecast(key: string) {
    const { data } = await api.get(`/forecasts/${API_VERSION}/daily/5day/${key}`, {
        params: {
            apikey: API_KEY,
            language: "pt-br",
            details: true,
        }
    })

    return data;
}
