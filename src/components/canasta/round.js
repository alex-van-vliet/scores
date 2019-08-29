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
  check () {
    if (!this.teams.some(team => team.go_out.get() === 100)) {
      throw new Error("No team went out.");
    }
  }
}

export default Round;
