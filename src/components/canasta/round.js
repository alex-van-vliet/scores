import StatList from './stat-list';

class Round {
  constructor(round = undefined) {
    if (round === undefined) {
      this.teams = [
        new StatList(),
        new StatList(),
      ];
    } else {
      this.teams = [
        new StatList(round.teams[0]),
        new StatList(round.teams[1]),
      ];
    }
  }
}

export default Round;
