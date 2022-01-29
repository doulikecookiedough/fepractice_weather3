// TODO - Import Error Component
// TODO - Import Loading Component
// TODO - Import Weather Content Group
import WeatherIndicatorGroup from "./components/WeatherContentGroup/WeatherContentGroup.js";
// TODO - Import Hook (Weather Data)

import './App.css';

function App() {
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

// function App() {
//   return (
//     <div id="weatherContainer" className="weatherData">
//        <div id="currentDay" class="day">
//          <p class="dayRow">
//            Tues
//          </p>
//          <img src="http://openweathermap.org/img/wn/10d.png" alt="weather icon" class="dayRow"/>
//          <div class="dayRow temperatureRow">
//            <span class="temperature">27</span>
//            <span class="temperature">27</span>
//          </div>
//        </div>
//        <div class="dayStyle">
//          <p>
//            Tues
//          </p>
//          <div class="break"></div>
//          <img src="http:openweathermap.org/img/wn/10d.png" alt="weather icon"/>
//          <div class="break"></div>
//          <p>27</p>
//          <p>28</p>
//        </div>
//        <div class="dayStyle">
//          <p>
//            Tues
//          </p>
//          <div class="break"></div>
//          <img src="http:openweathermap.org/img/wn/10d.png" alt="weather icon"/>
//          <div class="break"></div>
//          <p>27</p>
//          <p>28</p>
//        </div>
//        <div class="dayStyle">
//          <p>
//            Tues
//          </p>
//          <div class="break"></div>
//          <img src="http:openweathermap.org/img/wn/10d.png" alt="weather icon"/>
//          <div class="break"></div>
//          <p>27</p>
//          <p>28</p>
//        </div>
//        <div class="dayStyle">
//          <p>
//            Tues
//          </p>
//          <div class="break"></div>
//          <img src="http:openweathermap.org/img/wn/10d.png" alt="weather icon"/>
//          <div class="break"></div>
//          <p>27</p>
//          <p>28</p>
//        </div>
//      </div>
//   );
// }

export default App;
