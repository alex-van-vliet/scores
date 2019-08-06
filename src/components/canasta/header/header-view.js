import React from "react";

function HeaderView({titles, values}) {
  return <div className="row">
    <div className="team-name">{titles[0]}</div>
    <div className="spacer"/>
    <div className="total-score">{values[0]}</div>
    <div className="vs-sign">VS</div>
    <div className="total-score">{values[1]}</div>
    <div className="spacer"/>
    <div className="team-name">{titles[1]}</div>
  </div>;
}

export default HeaderView;
