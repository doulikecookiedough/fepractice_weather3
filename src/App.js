// TODO - Import Error Component
// TODO - Import Loading Component
// TODO - Import Weather Content Group
import WeatherIndicatorGroup from "./components/WeatherContentGroup/WeatherContentGroup.js";
// TODO - Import Hook (Weather Data)
import { UseWeatherData } from "./hooks/UseWeatherData.js";
import './App.css';

function App() {
  UseWeatherData()
  return (
    <div id="app-container">
      <WeatherIndicatorGroup />
      <WeatherIndicatorGroup />
      <WeatherIndicatorGroup />
      <WeatherIndicatorGroup />
      <WeatherIndicatorGroup />
     </div>
  );
}

export default App;
