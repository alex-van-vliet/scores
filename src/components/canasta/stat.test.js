import Stat from './stat';

it('starts from the lowest bound', () => {
  const stat = new Stat(x => x, -3, 4);
  expect(stat.value).toBe(-3);
});

it('can start from a given value', () => {
  const stat = new Stat(x => x, -3, 4, 2);
  expect(stat.value).toBe(2);
});

it('can add one to its value', () => {
  const stat = new Stat(x => x, 0, 4);
  expect(stat.value).toBe(0);
  stat.increment();
  expect(stat.value).toBe(1);
});

it('can subtract one to its value', () => {
  const stat = new Stat(x => x, 0, 4, 1);
  expect(stat.value).toBe(1);
  stat.decrement();
  expect(stat.value).toBe(0);
});

it('applies the score function', () => {
  const stat = new Stat(x => -42, 0, 4);
  expect(stat.get()).toBe(-42);
});

it('can set its value', () => {
  const stat = new Stat(x => x, 0, 4);
  expect(stat.value).toBe(0);
  stat.set(2);
  expect(stat.value).toBe(2);
});

it('does not exceed the minimum value', () => {
  const stat = new Stat(x => x, 0, 4, -1);
  expect(stat.value).toBe(0);
  stat.decrement();
  expect(stat.value).toBe(0);
  stat.set(-2);
  expect(stat.value).toBe(0);
});

it('does not exceed the maximum value', () => {
  const stat = new Stat(x => x, 0, 4, 5);
  expect(stat.value).toBe(4);
  stat.increment();
  expect(stat.value).toBe(4);
  stat.set(6);
  expect(stat.value).toBe(4);
});
