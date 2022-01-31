import ErrorDisplay from "./components/Error/ErrorDisplay.js";
import Loading from "./components/Loading/Loading.js";
import WeatherContentGroup from "./components/WeatherContentGroup/WeatherContentGroup.js";
import { useWeatherData } from "./hooks/UseWeatherData.js";
import './App.css';

function App() {
  // Get weather data
  const {items, loading, error} = useWeatherData("Seattle","imperial");

  return (
    <div id="app-container">
      {loading && <Loading />}
      {error && <ErrorDisplay error={error} />}
      {items && !error && <WeatherContentGroup data={items} />}
     </div>
  );
}

export default App;