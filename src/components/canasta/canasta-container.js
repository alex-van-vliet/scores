import React, {useState} from 'react';
import CanastaView from './canasta-view';
import Round from './round';

function CanastaContainer({teams}) {
  const [rounds, setRounds] = useState([new Round()]);
  const [reversed, setReversed] = useState(false);

  const reducer = ([acc_first, acc_second], round) =>
      [acc_first + round.teams[0].get(), acc_second + round.teams[1].get()];
  const scores = rounds.reduce(reducer, [0, 0]);

  const action = (team, fn) => {
    const new_rounds = rounds.map((round) => new Round(round));
    if (reversed)
      new_rounds[new_rounds.length - 1].teams[team][fn].decrement();
    else
      new_rounds[new_rounds.length - 1].teams[team][fn].increment();
    setRounds(new_rounds);
  };

  const add_round = () => {
    const new_rounds = rounds.map((round) => new Round(round));
    new_rounds.push(new Round());
    setRounds(new_rounds);
  };

  const toggle_reversed = () => {
    setReversed(!reversed);
  };

  return <CanastaView teams={teams} scores={scores} rounds={rounds} action={action} finish_round={add_round}
                      reversed={reversed} toggle_reversed={toggle_reversed}/>;
}

export default CanastaContainer;
