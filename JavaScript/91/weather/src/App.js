import React, { Component } from 'react';
import ZipChooser from './ZipChooser';
import './App.css';
import WeatherDetails from './WeatherDetails';

class App extends Component {
  state = {
    zip: ''
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.zip !== this.state.zip && this.state.zip.length === 5) {
      this.getWeather();
    }
  }

  zipChanged = (event) => {
    this.setState({
      zip: event.target.value
    })

    // if (event.target.value.length >= 5) {
    //   this.getWeather();
    // }
  }

  getWeather = async () => {
    const appId = '79f211f07776dd32c7db070614df9b06'
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${this.state.zip}&appid=${appId}&units=imperial`)
      const weatherData = await response.json();
      if (!response.ok) {
        throw new Error(`${weatherData.message || response.statusText}`);
      }
      console.log(weatherData);
      this.setState({
        weather: {
          city: weatherData.name,
          icon: `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`,
          details: `${weatherData.main.temp} and ${weatherData.weather[0].description}\n HI: ${weatherData.main.temp_max} LO: ${weatherData.main.temp_min}`
        },
        error: null
      });
    } catch (e) {
      console.error(e);
      this.setState({
        error: e.message,
        weather: null
      });
    }
  }

  render() {
    const weather = this.state.weather ? <WeatherDetails weather={this.state.weather} /> : <div>Please enter a zip code for weather</div>;
    const error = this.state.error ? <div className="alert alert-danger">{this.state.error}</div> : null;
    return (
      <div>
        <div className="container text-center">
          <div className="row">
            <ZipChooser zip={this.state.zip} zipChanged={this.zipChanged} />
          </div>
          {weather}
          {error}
        </div>
      </div>

    );
  }
}

export default App;
