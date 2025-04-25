import { useLocation } from "react-router";
import { CityResponse } from "../@types/types";

export function Weather() {
  const location = useLocation();
  const data: CityResponse = location.state;

  return (
    <div>
      <h1>Weather Page</h1>
      <p>{data.LocalizedName}</p>
      <p>{data.AdministrativeArea.LocalizedName}</p>
    </div>
  );
}
