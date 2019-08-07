import React from 'react';

import './canasta.sass';
import Header from './header';
import Row from './row';
import Footer from './footer';

function CanastaView({teams, scores, rounds, action, finish_round, reversed, toggle_reversed}) {
  const rows = [
    ['Perfect Deal', 'perfect_deal'],
    ['Red Three', 'red_threes'],
    ['Mixed Canasta', 'mixed_canastas'],
    ['Natural Canasta', 'natural_canastas'],
    ['Go Out', 'go_out'],
    ['Score', 'score'],
  ];

  const last_round = rounds[rounds.length - 1];

  return <div className="canasta">
    <div className="row header">
      <h1 className="title">Canasta</h1>
    </div>
    <Header titles={teams} values={scores}/>
    {rows.map(([title, fn], i) =>
        <Row title={title}
             values={[last_round.teams[0][fn].get(), last_round.teams[1][fn].get()]}
             key={i}
             action={(team) => action(team, fn)} />)}
    <div className="row">
      <div className="w-1/2 mr-2 text-right">
        <button className="button middle" onClick={finish_round}>
          Finish Round
        </button>
      </div>
      <div className="w-1/2 ml-2 text-left">
        <button className="button danger middle" onClick={toggle_reversed}>
          {reversed ? 'Reversed' : 'Normal'}
        </button>
      </div>
    </div>
    {rounds.map((round, i) =>
        <Footer title={'- ' + (i + 1) + ' -'}
                values={[round.teams[0].get(), round.teams[1].get()]}
                key={i} />).reverse()}
  </div>;
}

export default CanastaView;
