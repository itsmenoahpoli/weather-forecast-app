import React from "react";
import { Form, Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

type TSearchWeatherForecastForm = {
  handleDisplayCityWeather: (city: string) => void;
};

export const SearchWeatherForecastForm: React.FC<TSearchWeatherForecastForm> = (
  props
) => {
  const [city, setCity] = React.useState<string>("");

  const onFormFinish = () => {
    props.handleDisplayCityWeather(city);
  };

  return (
    <Form className="weather-by-city-search-form" onFinish={onFormFinish}>
      <Input
        prefix={<SearchOutlined />}
        size="large"
        placeholder="Search any city"
        onChange={(e) => setCity(e.target.value)}
        required
      />
      <div className="actions-container">
        <Button htmlType="submit" disabled={city.length < 1}>
          Display Weather
        </Button>
      </div>
    </Form>
  );
};
