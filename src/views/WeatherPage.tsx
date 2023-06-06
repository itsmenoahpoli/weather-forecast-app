import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { PageLayout } from "~/components";
import { useWeatherStore } from "~/store";
import dayjs from "dayjs";

export const WeatherPage: React.FC = () => {
  const { cityForecast, CLEAR_CITY_FORECAST } = useWeatherStore();
  const navigate = useNavigate();

  const handleGoBack = () => {
    CLEAR_CITY_FORECAST();
    navigate("/home");
  };

  console.log(cityForecast);
  return (
    <PageLayout pageName="Forecast Result">
      <div className="weather-report-wrapper">
        <div className="forecast-report-container">
          <table>
            <thead>
              <tr>
                <th>Date (mm/dd/yyyy)</th>
                <th>Temp (F)</th>
                <th className="hidden-in-mobile">Description</th>
                <th className="hidden-in-mobile">Main</th>
                <th className="hidden-in-mobile">Pressure</th>
                <th className="hidden-in-mobile">Humidity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{dayjs(cityForecast.current.last_updated).format("MM/DD/YYYY")}</td>
                <td>{cityForecast.current.temp_f}</td>
                <td className="hidden-in-mobile">
                  {cityForecast.current.condition.text}
                </td>
                <td className="hidden-in-mobile">
                  {cityForecast.current.condition.text}
                </td>
                <td className="hidden-in-mobile">{cityForecast.current.pressure_mb}</td>
                <td className="hidden-in-mobile">{cityForecast.current.humidity}</td>
              </tr>
            </tbody>
          </table>
          <div className="actions-container">
            <Button onClick={handleGoBack}>Back</Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
