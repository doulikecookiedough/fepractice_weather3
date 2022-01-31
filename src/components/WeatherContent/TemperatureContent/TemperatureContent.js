import "./TemperatureContent.css"

// const TemperatureGroup = () => {
//   return (
//     <div className="tempRow tempPadding">
//         <span className="tempFormatting">27&deg;</span>
//         <span className="tempFormatting">24&deg;</span>
//     </div>
//   );
// };

const TemperatureGroup = ({ min, max }) => {
  return (
    <div className="tempRow tempPadding">
        <span className="tempFormatting">{max}&deg;</span>
        <span className="tempFormatting">{min}&deg;</span>
    </div>
  );
};

export default TemperatureGroup;