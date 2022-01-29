import WeatherContent from '../WeatherContent/WeatherContent.js';
import './WeatherContentGroup.css';

const WeatherContentGroup = () => {
    return (
        <div id="weatherContainer" className="weatherData">
            <WeatherContent />
        </div> 
    );
};

// const WeatherContentGroup = ({ data }) => {
//     return (
//         <div id="weatherContainer" className="weatherData">
//             <WeatherContent />
//         </div> 
//     );
// };
  
export default WeatherContentGroup;
  