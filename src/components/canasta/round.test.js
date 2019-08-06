import Round from './round';
import StatList from './stat-list';

it('has two teams', () => {
  const round = new Round();
  expect(round.teams).toHaveLength(2);
  expect(round.teams[0]).toBeInstanceOf(StatList);
  expect(round.teams[1]).toBeInstanceOf(StatList);
});
