import "./TemperatureContent.css"

const TemperatureGroup = () => {
  return (
    <div className="tempRow tempPadding">
        <span class="tempFormatting">27&deg;</span>
        <span class="tempFormatting">24&deg;</span>
    </div>
  );
};

// const TemperatureGroup = ({ min, max }) => {
//   return (
//     <div className="tempRow tempPadding">
//         <span class="tempFormatting">{max}&deg;</span>
//         <span class="tempFormatting">{min}&deg;</span>
//     </div>
//   );
// };

export default TemperatureGroup;