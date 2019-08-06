import React from "react";

function FooterView({title, values}) {
  return <div className="row">
    <div className="spacer"/>
    <div className="total-score">{values[0]}</div>
    <div className="vs-sign">{title}</div>
    <div className="total-score">{values[1]}</div>
    <div className="spacer"/>
  </div>;
}

export default FooterView;
