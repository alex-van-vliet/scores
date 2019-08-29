import React, {useState} from 'react';
import CanastaView from './canasta-view';
import Round from './round';
import swal from 'sweetalert2';
import serialize from 'serialize-javascript';

function CanastaContainer({teams}) {
  const [rounds, roundsSetter] = useState(() => {
    if (window && window.localStorage) {
      const rounds = window.localStorage.getItem('canasta.rounds');
      if (rounds) {
        // eslint-disable-next-line no-eval
        return eval('(' + rounds + ')').map((e) => new Round(e));
      }
    }
    return [new Round()];
  });
  const [reversed, setReversed] = useState(false);

  const setRounds = function (value) {
    roundsSetter(value);
    if (window && window.localStorage) {
      window.localStorage.setItem('canasta.rounds', serialize(value));
    }
  };

  const reducer = ([acc_first, acc_second], round) =>
      [acc_first + round.teams[0].compute(), acc_second + round.teams[1].compute()];
  const scores = rounds.reduce(reducer, [0, 0]);

  const action = (team, fn) => {
    if (fn === 'score') {
      swal.fire({
        title: 'Enter your score',
        input: 'text',
        inputValue: '',
        showCancelButton: true,
        target: '.canasta',
        inputValidator: (value) => {
          if (value !== '' && !isNaN(value)) {
            const new_rounds = rounds.map((round) => new Round(round));
            new_rounds[new_rounds.length - 1].teams[team][fn].set(parseInt(value));
            setRounds(new_rounds);
          }
        }
      });
    } else {
      const new_rounds = rounds.map((round) => new Round(round));
      if (reversed)
        new_rounds[new_rounds.length - 1].teams[team][fn].decrement();
      else
        new_rounds[new_rounds.length - 1].teams[team][fn].increment();
      setRounds(new_rounds);
    }
  };

  const add_round = () => {
    if (rounds.length > 0) {
      try {
        rounds[rounds.length - 1].check();
      } catch (e) {
        swal.fire({
          title: 'Error!',
          text: e.message,
          type: 'error',
          confirmButtonText: 'Ok',
          target: '.canasta'
        });
        return;
      }
    }
    const new_rounds = rounds.map((round) => new Round(round));
    new_rounds.push(new Round());
    setRounds(new_rounds);
  };

  const toggle_reversed = () => {
    setReversed(!reversed);
  };

  const reset = () => {
    swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, reset the game!'
    }).then((result) => {
      if (result.value) {
        setRounds([new Round()]);
      }
    });
  };

  return <CanastaView teams={teams} scores={scores} rounds={rounds} action={action} finish_round={add_round}
                      reversed={reversed} toggle_reversed={toggle_reversed} reset={reset}/>;
}

export default CanastaContainer;
