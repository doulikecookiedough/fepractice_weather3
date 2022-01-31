import WeekDayContent from './WeekDayContent/WeekDayContent.js';
import WeatherImage from './WeatherImage/WeatherImage.js';
import TemperatureContent from './TemperatureContent/TemperatureContent.js';

const WeatherContent = ({data, today}) => {
  return (
    <div className={`contentGroup ${today ? 'today' : ''}`}>
      <WeekDayContent day={data.date} />
      <WeatherImage id={data.icon} />
      <TemperatureContent min={data.min} max={data.max} />
    </div>
  );
};

export default WeatherContent;
