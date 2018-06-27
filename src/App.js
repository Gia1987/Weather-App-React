import React from 'react';

import Titles from './component/Titles';
import Form  from './component/Form.js';
import Weather  from './component/Weather.js';

const API_KEY = "a3d9eb01d4de82b9b8d0849ef604dbed";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async(e) => {
    // async await
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);
    // use a build react's method (setState) which allows to manipulate the state
  if (city && country) {
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ""
    })
  } else {
      this.setState({
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: 'Please enter the values'
      })
    }
  }
  render() {
    return (
      <div>
        <Titles />
        <Form getWeather = {this.getWeather} />
        <Weather
        temperature = {this.state.temperature}
        city = {this.state.city}
        country = {this.state.country}
        humidity = {this.state.humidity}
        description = {this.state.description}
        error = {this.state.error}
        />
      </div>
    );
  }
};

export default App;
