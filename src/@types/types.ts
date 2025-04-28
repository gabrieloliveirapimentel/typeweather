export interface CityResponse {
  Version: number;
  Key: string;
  Type: string;
  Rank: number;
  LocalizedName: string;
  Country: {
    ID: string;
    LocalizedName: string;
  };
  AdministrativeArea: {
    ID: string;
    LocalizedName: string;
  };
}

export interface City {
  id: string;
  nome: string;
  uf?: string;
  state?: string;
  country: string;
}

interface ComponentProps {
  Imperial: {
    Value: number;
    Unit: string;
    UnitType: number;
    Phrase?: string;
  }
  Metric: {
    Value: number;
    Unit: string;
    UnitType: number;
    Phrase?: string;
  }
}
export interface ConditionsResponse {
  ApparentTemperature: ComponentProps
  Ceiling: ComponentProps
  CloudCover: number
  DewPoint: ComponentProps
  EpochTime?: number
  HasPrecipitation: boolean
  IndoorRelativeHumidity: number
  IsDayTime: boolean
  Link: string
  LocalObservationDateTime: string
  MobileLink: string
  ObstructionsToVisibility?: string
  Past24HourTemperatureDeparture: ComponentProps
  Precip1hr: ComponentProps
  PrecipitationSummary: {
    Past3Hours: ComponentProps
    Past6Hours: ComponentProps
    Past9Hours: ComponentProps
    Past12Hours: ComponentProps
    Past18Hours: ComponentProps
    Past24Hours: ComponentProps
    PastHour: ComponentProps
    Precipitation: ComponentProps
  }
  PrecipitationType?: string
  Pressure: ComponentProps
  PressureTendency: ComponentProps 
  RealFeelTemperature: ComponentProps
  RealFeelTemperatureShade: ComponentProps
  RelativeHumidity: number
  Temperature: ComponentProps
  TemperatureSummary: {
    Past6HourRange: {
      Minimum: ComponentProps
      Maximum: ComponentProps
    }
    Past12HoursRange: {
      Minimum: ComponentProps
      Maximum: ComponentProps
    }
    Past24HoursRange: {
      Minimum: ComponentProps
      Maximum: ComponentProps
    }
  }
  UVIndex: number
  UVIndexText: string
  Visibility: ComponentProps
  WeatherIcon: number
  WeatherText: string
  WetBulbGlobeTemperature: ComponentProps
  WetBulbTemperature: ComponentProps
  Wind: {
    Direction: {
      Degrees: number
      Localized: string
      English: string
    }
    Speed: ComponentProps
  }
  WindChillTemperature: ComponentProps
  WindGust: {
    Speed: ComponentProps
  }
}

export interface ConditionsProps {
  ApparentTemperature: ComponentProps
  HasPrecipitation: boolean;
  IndoorRelativeHumidity: number;
  IsDayTime: boolean;
  LocalObservationDateTime: string;
  PrecipitationSummary: {
    Precipitation: ComponentProps
  }
  RealFeelTemperature: ComponentProps
  RelativeHumidity: number
  Temperature: ComponentProps
  TemperatureSummary: {
    Past6HourRange: {
      Minimum: ComponentProps
      Maximum: ComponentProps
    }
  }
  UVIndex: number;
  UVIndexText: string
  WeatherIcon: number;
  WeatherText: string;
  Wind: {
    Direction: {
      Degrees: number;
      Localized: string;
      English: string;
    }
    Speed: ComponentProps
  }
}

