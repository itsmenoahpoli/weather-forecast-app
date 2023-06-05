import React from "react";
import { Form, Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

type TSearchWeatherByCityForm = {
  handleDisplayCityWeather: (city: string) => void;
};

export const SearchWeatherByCityForm: React.FC<TSearchWeatherByCityForm> = (props) => {
  const [city, setCity] = React.useState<string>("");

  return (
    <Form
      className="weather-by-city-search-form"
      onFinish={props.handleDisplayCityWeather}
    >
      <Input prefix={<SearchOutlined />} size="large" placeholder="Search any city" />
      <Button htmlType="submit">Display Weather</Button>
    </Form>
  );
};
