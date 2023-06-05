import React from "react";
import { Form, Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

type TSearchWeatherByCityForm = {
  handleDisplayCityWeather: (city: string) => void;
};

export const SearchWeatherByCityForm: React.FC<TSearchWeatherByCityForm> = (props) => {
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
      <Button htmlType="submit">Display Weather</Button>
    </Form>
  );
};
