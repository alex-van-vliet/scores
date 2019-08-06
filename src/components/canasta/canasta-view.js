import React from 'react';

import './canasta.sass';
import Header from './header';

function CanastaView({teams}) {
  return <div className="canasta">
    <div className="row header">
      <h1 className="title">Canasta</h1>
    </div>
    <Header teams={teams}/>
    <div className="row">
      <button className="button">Perfect Deal</button>
      <div className="spacer"/>
      <div>0</div>
      <div className="spacer mid"/>
      <div>0</div>
      <div className="spacer"/>
      <button className="button">Perfect Deal</button>
    </div>
    <div className="row">
      <button className="button">Red Three</button>
      <div className="spacer"/>
      <div>0</div>
      <div className="spacer mid"/>
      <div>0</div>
      <div className="spacer"/>
      <button className="button">Red Three</button>
    </div>
    <div className="row">
      <button className="button">Mixed Canasta</button>
      <div className="spacer"/>
      <div>0</div>
      <div className="spacer mid"/>
      <div>0</div>
      <div className="spacer"/>
      <button className="button">Mixed Canasta</button>
    </div>
    <div className="row">
      <button className="button">Natural Canasta</button>
      <div className="spacer"/>
      <div>0</div>
      <div className="spacer mid"/>
      <div>0</div>
      <div className="spacer"/>
      <button className="button">Natural Canasta</button>
    </div>
    <div className="row">
      <button className="button">Go Out</button>
      <div className="spacer"/>
      <div className="spacer mid"/>
      <div className="spacer"/>
      <button className="button">Go Out</button>
    </div>
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
