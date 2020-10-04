import React, { useState } from "react";
import "../styles/gradients.scss";

// TODO: make this an interface
function Gradient(props: { gradients: object }) {
  const [currentGradient, setCurrentGradient] = useState(0);

  const getGradient = (id) => {
    let gradientText = "";
    for (let i = 0; i < props.gradients[0].length; i++) {
      if (props.gradients[id].length - 1 === i) {
        gradientText += `${props.gradients[id][i]}`;
      } else {
        gradientText += `${props.gradients[id][i]}, `;
      }
    }
    return gradientText;
  };

  const getStyles = (id) => {
    let opacity = 1;

    if (currentGradient !== id) {
      opacity = 0;
    }

    return {
      opacity: opacity,
      backgroundColor: props.gradients[0][0],
      background: `radial-gradient(at 0% bottom, ${getGradient(id)})`,
    };
  };

  return (
    <div
      className="gradient-container"
      style={{ backgroundColor: props.gradients[0][0] }}
    >
      <div className="gradient-main gradient " style={getStyles(0)}></div>
      <div className="gradient-secondary gradient" style={getStyles(1)}></div>
    </div>
  );
}

export default Gradient;
