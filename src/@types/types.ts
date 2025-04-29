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


export interface DayProps {
  CloudCover: number
  Evapotranspiration: ComponentProps
  HasPrecipitation: boolean
  HoursOfIce: number
  HoursOfPrecipitation: number
  HoursOfRain: number
  HoursOfSnow: number
  Ice: ComponentProps
  IceProbability: number
  Icon: number
  IconPhrase: string
  LongPhrase: string
  PrecipitationProbability: number
  Rain: ComponentProps
  RainProbability: number
  RelativeHumidity: {
    Minimum: number
    Maximum: number
    Average: number
  }
  ShortPhrase: string
  Snow: ComponentProps
  SnowProbability: number
  SolarIrradiance: ComponentProps
  ThunderstormProbability: number
  TotalLiquid: ComponentProps
  WetBulbGlobeTemperature: {
    Average: ComponentProps
    Maximum: ComponentProps
    Minimum: ComponentProps
  }
  WetBulbTemperature: {
    Average: ComponentProps
    Maximum: ComponentProps
    Minimum: ComponentProps
  }
  Wind: {
    Direction: {
      Degrees: number
      English: string
      Localized: string
    }
    Speed: ComponentProps
  }
  WindGust: {
    Direction: {
      Degrees: number
      English: string
      Localized: string
    }
    Speed: ComponentProps
  }
}

export interface DailyForecasts {
  AirAndPollen: {
    Name: string
    Value: number
    Category: string
    CategoryValue: number
    Type: string
  }[]
  Date: string
  Day: DayProps
  DegreeDaySummary: {
    Cooling: ComponentProps
    Heating: ComponentProps
  }
  EpochDateTime: number
  HoursOfSun: number
  Link: string
  MobileLink: string
  Moon: {
    Age: number
    EpochRise: number
    EpochSet: number
    Phase: string
    Rise: string
    Set: string
  }
  Night: DayProps
  RealFeelTemperature: {
    Maximum: ComponentProps
    Minimum: ComponentProps
  }
  RealFeelTemperatureShade: {
    Maximum: ComponentProps
    Minimum: ComponentProps
  }
  Sources: string[]
  Sun: {
    EpochRise: number
    EpochSet: number
    Rise: string
    Set: string
  }
  Temperature: {
    Maximum: {
      Value: number
      Unit: string
      UnitType: number
    }
    Minimum: {
      Value: number
      Unit: string
      UnitType: number
    }
  }
}

export interface ForecastResponse {
  Headline: {
    Category: string
    EffectiveDate: string
    EffectiveEpochDate: number
    EndDate: string
    EndEpochDate: number
    Link: string
    MobileLink: string
    Severity: number
    Text: string
  }
  DailyForecasts: DailyForecasts[]
}

export interface ForecastProps {
  Date: string
  Day: {
    Icon: number
    IconPhrase: string
    ShortPhrase: string
  }
  Temperature: {
    Maximum: {
      Value: number
      Unit: string
      UnitType: number
    }
    Minimum: {
      Value: number
      Unit: string
      UnitType: number
    }
  }
}

export interface FormattedForecast {
  date: string;
  icon: number;
  description?: string;
  temperature: {
    min: number;
    max: number;
  };
}

export interface FormattedDailyProps {
  feelTemperature: string;
  precipitation: {
    value: number;
    unit: string;
  }
  wind: {
    value: number;
    unit: string;
  }
  humidity: string;
  uvIndex: number;
}

export interface FormattedDayDetail {
  day: string;
  icon: number;
  description?: string;
  temperature: {
    min: number;
    max: number;
  }
}

export interface FormattedCityDetailsProps {
  name: string;
  state?: string;
  country?: string;
  datetime: string;
  temperature: {
    min: number;
    max: number;
    current: number;
  };
  isDayTime: boolean;
  icon: number;
}