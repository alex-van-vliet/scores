import React from "react";

function RowView({title, values, action=(team) => {}}) {
  return <div className="row">
    <div className="spacer row centered">
      <button className="button left" onClick={() => action(0)}>{title}</button>
      <div className="spacer"/>
      <div>{values[0]}</div>
    </div>
    <div className="spacer mid"/>
    <div className="spacer row centered">
      <div>{values[1]}</div>
      <div className="spacer"/>
      <button className="button right" onClick={() => action(1)}>{title}</button>
    </div>
  </div>;
}

export default RowView;
