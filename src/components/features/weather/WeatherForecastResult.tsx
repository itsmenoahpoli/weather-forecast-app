import React from "react";
import { Button } from "antd";
import dayjs from "dayjs";

type TWeatherForecastResult = {
  cityForecast: any;
  handleGoBack: () => void;
};

export const WeatherForecastResult: React.FC<TWeatherForecastResult> = (props) => {
  return (
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
            <td>{dayjs(props.cityForecast.current.last_updated).format("MM/DD/YYYY")}</td>
            <td>{props.cityForecast.current.temp_f}</td>
            <td className="hidden-in-mobile">
              {props.cityForecast.current.condition.text}
            </td>
            <td className="hidden-in-mobile">
              {props.cityForecast.current.condition.text}
            </td>
            <td className="hidden-in-mobile">{props.cityForecast.current.pressure_mb}</td>
            <td className="hidden-in-mobile">{props.cityForecast.current.humidity}</td>
          </tr>
        </tbody>
      </table>
      <div className="actions-container">
        <Button onClick={props.handleGoBack}>Back</Button>
      </div>
    </div>
  );
};
