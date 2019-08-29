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
    let out_teams = this.teams.filter(team => team.go_out.get() === 1);
    if (out_teams.length === 0) {
      throw new Error('No team went out.');
    } else if (out_teams.length > 1) {
      throw new Error('More than one team went out.');
    }
    let red_threes = this.teams.reduce((acc, team) => acc + Math.abs(team.red_threes.get()), 0);
    if (red_threes > 4) {
      throw new Error('More than four red threes were given.');
    }
  }
}

export default Round;
