import React from 'react';

import './canasta.sass';
import Header from './header';
import Row from './row';

function CanastaView({teams, scores}) {
  return <div className="canasta">
    <div className="row header">
      <h1 className="title">Canasta</h1>
    </div>
    <Header teams={teams} scores={scores}/>
    <Row title="Perfect Deal" values={[0, 0]}/>
    <Row title="Red Three" values={[0, 0]}/>
    <Row title="Mixed Canasta" values={[0, 0]}/>
    <Row title="Natural Canasta" values={[0, 0]}/>
    <Row title="Go Out"/>
    <div className="row">
      <div className="spacer"/>
      <div className="total-score">0</div>
      <div className="vs-sign">- 1 -</div>
      <div className="total-score">0</div>
      <div className="spacer"/>
    </div>
  </div>;
}

export default CanastaView;
