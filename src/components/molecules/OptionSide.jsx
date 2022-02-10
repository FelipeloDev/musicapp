import React from "react";
import "./OptionSide.css";

function OptionSide({ option = "test", Icon }) {
  return (
    <div className="optionSide">
      {Icon && <Icon className="optionSide__icon" />}
      {Icon ? <h4>{option}</h4> : <p>{option}</p>}
    </div>
  )
}

export default OptionSide