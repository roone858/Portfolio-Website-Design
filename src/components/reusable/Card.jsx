import React from "react";

export const Card = (props) => {
  return (
    <div className="col-4 p-4 ">
      <div className="project shadow" style={{backgroundColor:props.color}}>{props.title}</div>
    </div>
  );
};
