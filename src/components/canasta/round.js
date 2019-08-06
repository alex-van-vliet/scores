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
        new StatList(this.teams[0]),
        new StatList(this.teams[1]),
      ];
    }
  }
}

export default Round;
