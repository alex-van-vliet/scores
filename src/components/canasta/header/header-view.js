import React from "react";

function HeaderView({teams}) {
  return <div className="row">
    <div className="team-name">{teams[0]}</div>
    <div className="spacer"/>
    <div className="total-score">0</div>
    <div className="vs-sign">VS</div>
    <div className="total-score">0</div>
    <div className="spacer"/>
    <div className="team-name">{teams[1]}</div>
  </div>;
}

export default HeaderView;
