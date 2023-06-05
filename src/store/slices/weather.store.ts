import { create } from "zustand";
import { persist } from "zustand/middleware";

type WeatherStoreState = {
  cityForecast: object | null;
  SET_CITY_FORECAST: (forecast: object) => void;
  CLEAR_CITY_FORECAST: () => void;
};

export const useWeatherStore = create<WeatherStoreState>()(
  persist(
    (set) => ({
      cityForecast: {},
      SET_CITY_FORECAST: (forecast: object) => {
        console.log("store", forecast);
        set(() => ({ cityForecast: forecast }));
      },
      CLEAR_CITY_FORECAST: () => {
        set(() => ({ cityForecast: null }));
      },
    }),
    {
      name: "weather-store-storage",
    }
  )
);
