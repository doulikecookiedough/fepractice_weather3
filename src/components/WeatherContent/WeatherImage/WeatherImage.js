import { WEATHER_ICON_DESCRIPTION } from './WeatherConstants';

// const WeatherImage = () => {
//   return <img src={`./assets/images/01.png`} alt="Weather" />
// };

const WeatherImage = ({id}) => {
  return <img src={`./assets/images/${id}.png`} alt={WEATHER_ICON_DESCRIPTION[id]} />
};

export default WeatherImage;
