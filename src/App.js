import React from 'react';

import Titles from './component/Titles';
import Form  from './component/Form.js';
import Weather  from './component/Weather.js';

const API_KEY = "a3d9eb01d4de82b9b8d0849ef604dbed";

class App extends React.Component {
  getWeather = async(e) => {
    // async await
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);

  }
  render() {
    return (
      <div>
        <Titles />
        <Form getWeather = {this.getWeather} />
        <Weather />
      </div>
    );
  }
};

export default App;
