import WeatherContent from '../WeatherContent/WeatherContent.js';
import './WeatherContentGroup.css';

// const WeatherContentGroup = () => {
//     return (
//         <div id="weatherContainer" className="weatherData">
//             <WeatherContent />
//         </div> 
//     );
// };

// const WeatherContentGroup = ({ data }) => {
//     return (
//         <div id="weatherContainer" className="weatherData">
//             {data.map((dayInfo,index) => (
//                 <WeatherContent key={dayInfo.date} today={index === 1} data={dayInfo} />
//             ))}
//         </div>
//     );
// };

// const WeatherContentGroup = ({ data }) => {
//     console.log(data)
//     return (
//         <div id="weatherContainer" className="weatherData">
//             {data.map((dayInfo,index) => (
//                 <WeatherContent key={dayInfo.date} today={index === 0} data={dayInfo} />
//             ))}
//         </div>
//     );
// };

const WeatherContentGroup = ({ data }) => {
    console.log(data)
    return (
        <div id="weatherContainer" className="weatherData">
            {data.map((dayInfo,index) => (
                <WeatherContent key={dayInfo.date} data={dayInfo} today={index === 0} />
            ))}
        </div>
    );
};

export default WeatherContentGroup;
