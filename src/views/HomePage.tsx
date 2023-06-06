import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { PageLayout, UserProfileData, SearchWeatherForecastForm } from "~/components";
import { WeatherService } from "~/services";

export const HomePage: React.FC = () => {
  const { user } = useAuth0();
  const navigate = useNavigate();

  const handleDisplayCityWeather = async (city: string) => {
    await WeatherService.getWeatherForecastByCity(city).then((response) => {
      if (response && response.status === 200) {
        navigate("/weather");
      }
    });
  };

  return (
    <PageLayout pageName="Welcome">
      <div className="home-wrapper">
        <UserProfileData user={user} />
        <SearchWeatherForecastForm handleDisplayCityWeather={handleDisplayCityWeather} />
      </div>
    </PageLayout>
  );
};
