import React from "react";

function FooterView({title, values}) {
  return <div className="row">
    <div className="spacer row">
      <div className="spacer"/>
      <div className="total-score">{values[0]}</div>
    </div>
    <div className="vs-sign">{title}</div>
    <div className="spacer row">
      <div className="total-score">{values[1]}</div>
      <div className="spacer"/>
    </div>
  </div>;
}

export default FooterView;
