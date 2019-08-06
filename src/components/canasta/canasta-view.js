import React from 'react';

import './canasta.sass';
import Header from './header';
import Row from './row';
import Footer from './footer';

function CanastaView({teams, scores, rounds, action}) {
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
    {rounds.map((round, i) =>
        <Footer title={'- ' + (i + 1) + ' -'}
                values={[round.teams[0].get(), round.teams[1].get()]}
                key={i} />)}
  </div>;
}

export default CanastaView;
