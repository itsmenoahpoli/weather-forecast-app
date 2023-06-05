import React from "react";
import { PageLayout } from "~/components";
import { useWeatherStore } from "~/store";

export const WeatherPage: React.FC = () => {
  const weatherStore = useWeatherStore();

  console.log(weatherStore.cityForecast);
  return <PageLayout pageName="Forecast Result">//</PageLayout>;
};
