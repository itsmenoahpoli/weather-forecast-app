import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { PageLayout, UserProfileData, SearchWeatherByCityForm } from "~/components";
import { WeatherService } from "~/services";

export const HomePage: React.FC = () => {
  const { user } = useAuth0();

  const handleDisplayCityWeather = async (city: string) => {
    await WeatherService.getWeatherForecaseByCity(city);
  };

  return (
    <PageLayout pageName="Welcome">
      <div className="home-wrapper">
        <UserProfileData user={user} />
        <SearchWeatherByCityForm handleDisplayCityWeather={handleDisplayCityWeather} />
      </div>
    </PageLayout>
  );
};
