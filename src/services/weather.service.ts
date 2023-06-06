import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import { getEnv } from "~/config";
import { useWeatherStore } from "~/store";

export class WeatherService {
  public static async getWeatherForecastByCity(city: string) {
    try {
      const apiUrl = `${getEnv("WEATHER_API_BASEURL")}?key=${getEnv(
        "WEATHER_API_KEY"
      )}&q=${city}&days=1&aqi=yes&alerts=no`;

      const response = await axios.get(apiUrl);
      const weatherStore = useWeatherStore.getState();

      weatherStore.SET_CITY_FORECAST(response.data);

      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.error.message);
      }
    }
  }
}
