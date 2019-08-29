import Round from './round';
import StatList from './stat-list';

it('has two teams', () => {
  const round = new Round();
  expect(round.teams).toHaveLength(2);
  expect(round.teams[0]).toBeInstanceOf(StatList);
  expect(round.teams[1]).toBeInstanceOf(StatList);
});

it('throws an error when no one went out', () => {
  const round = new Round();
  expect(() => {
    round.check();
  }).toThrowError(new Error("No team went out."));
});

it('does not throw an error in a correct game', () => {
  const round = new Round();
  round.teams[0].go_out.set(1);
  round.check();
});