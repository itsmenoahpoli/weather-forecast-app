import React from "react";
import { useNavigate } from "react-router-dom";
import { PageLayout, WeatherForecastResult } from "~/components";
import { useWeatherStore } from "~/store";

export const WeatherPage: React.FC = () => {
  const { cityForecast, CLEAR_CITY_FORECAST } = useWeatherStore();
  const navigate = useNavigate();

  const handleGoBack = () => {
    CLEAR_CITY_FORECAST();
    navigate("/home");
  };

  return (
    <PageLayout pageName="Forecast Result">
      <div className="weather-report-wrapper">
        <WeatherForecastResult cityForecast={cityForecast} handleGoBack={handleGoBack} />
      </div>
    </PageLayout>
  );
};
