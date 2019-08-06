import React from "react";

function RowView({title, values=undefined}) {
  if (values) {
    return <div className="row">
      <button className="button">{title}</button>
      <div className="spacer"/>
      <div>{values[0]}</div>
      <div className="spacer mid"/>
      <div>{values[1]}</div>
      <div className="spacer"/>
      <button className="button">{title}</button>
    </div>;
  } else {
    return <div className="row">
      <button className="button">{title}</button>
      <div className="spacer"/>
      <button className="button">{title}</button>
    </div>;
  }
}

export default RowView;
