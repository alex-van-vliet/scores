import React from "react";

function HeaderView({teams, scores}) {
  return <div className="row">
    <div className="team-name">{teams[0]}</div>
    <div className="spacer"/>
    <div className="total-score">{scores[0]}</div>
    <div className="vs-sign">VS</div>
    <div className="total-score">{scores[1]}</div>
    <div className="spacer"/>
    <div className="team-name">{teams[1]}</div>
  </div>;
}

export default HeaderView;
