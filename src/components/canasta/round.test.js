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
  }).toThrowError(new Error('No team went out.'));
});

it('throws an error if two teams went out', () => {
  const round = new Round();
  round.teams[0].go_out.set(1);
  round.teams[1].go_out.set(1);
  expect(() => {
    round.check();
  }).toThrowError(new Error('More than one team went out.'));
});

it('throws an error if there are more than 4 red threes', () => {
  const round = new Round();
  round.teams[0].go_out.set(1);
  round.teams[0].red_threes.set(3);
  round.teams[1].red_threes.set(2);
  expect(() => {
    round.check();
  }).toThrowError(new Error('More than four red threes were given.'));
});

it('throws an error if there are more than 4 red threes', () => {
  const round = new Round();
  round.teams[1].go_out.set(1);
  round.teams[0].red_threes.set(-3);
  round.teams[1].red_threes.set(2);
  expect(() => {
    round.check();
  }).toThrowError(new Error('More than four red threes were given.'));
});

it('does not throw an error in a correct game', () => {
  const round = new Round();
  round.teams[0].go_out.set(1);
  round.teams[0].red_threes.set(2);
  round.teams[1].red_threes.set(-2);
  round.check();
});