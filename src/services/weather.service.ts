import axios, { AxiosError } from "axios";
import { getEnv } from "~/config";

export class WeatherService {
  public static async getWeatherForecaseByCity(city: string) {
    try {
      const apiUrl = `${getEnv("WEATHER_API_BASEURL")}?key=${getEnv(
        "WEATHER_API_KEY"
      )}&q=${city}&days=1&aqi=yes&alerts=no`;

      const response = await axios.get(apiUrl);

      console.log(response.data);
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error);
      }
    }
  }
}
