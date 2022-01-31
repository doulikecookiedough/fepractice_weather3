import './WeekDayContent.css';

// const WeekDay = () => {
//   return <p className="dayRow">Tues</p>;
// };

const WeekDayContent = ({ day }) => {
  return <p className="dayRow">{day}</p>;
};

export default WeekDayContent;
