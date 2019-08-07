import Stat from './stat';
import StatList from './stat-list';

it('gets the total score', () => {
  const list = new StatList();
  list.perfect_deal.set(1); // 100
  list.red_threes.set(4); // 800
  list.mixed_canastas.set(2); // 600
  list.natural_canastas.set(1); // 500
  list.go_out.set(1); // 100
  list.score.set(123); // 123
  expect(list.get()).toBe(100 + 800 + 600 + 500 + 100 + 123);
});

it('has a perfect deal field', () => {
  const list = new StatList();
  expect(list.perfect_deal).toBeInstanceOf(Stat);
  expect(list.perfect_deal.minimum).toBe(0);
  expect(list.perfect_deal.value).toBe(0);
  expect(list.perfect_deal.maximum).toBe(1);
  [[0, 0], [1, 100]].forEach(([value, expected]) => {
    list.perfect_deal.set(value);
    expect(list.perfect_deal.get()).toBe(expected);
  });
});

it('has a red threes field', () => {
  const list = new StatList();
  expect(list.red_threes).toBeInstanceOf(Stat);
  expect(list.red_threes.minimum).toBe(-4);
  expect(list.red_threes.value).toBe(0);
  expect(list.red_threes.maximum).toBe(4);
  [[0, 0], [1, 100], [2, 200], [3, 300], [4, 800]].forEach(([value, expected]) => {
    list.red_threes.set(value);
    expect(list.red_threes.get()).toBe(expected);
    list.red_threes.set(-value);
    expect(list.red_threes.get()).toBe(-expected);
  });
});

it('has a mixed canastas field', () => {
  const list = new StatList();
  expect(list.mixed_canastas).toBeInstanceOf(Stat);
  expect(list.mixed_canastas.minimum).toBe(0);
  expect(list.mixed_canastas.value).toBe(0);
  expect(list.mixed_canastas.maximum).toBe(Number.MAX_SAFE_INTEGER);
  [[0, 0], [1, 300], [4, 4 * 300], [50, 50 * 300]].forEach(([value, expected]) => {
    list.mixed_canastas.set(value);
    expect(list.mixed_canastas.get()).toBe(expected);
  });
});

it('has a natural canastas field', () => {
  const list = new StatList();
  expect(list.natural_canastas).toBeInstanceOf(Stat);
  expect(list.natural_canastas.minimum).toBe(0);
  expect(list.natural_canastas.value).toBe(0);
  expect(list.natural_canastas.maximum).toBe(Number.MAX_SAFE_INTEGER);
  [[0, 0], [1, 500], [4, 4 * 500], [50, 50 * 500]].forEach(([value, expected]) => {
    list.natural_canastas.set(value);
    expect(list.natural_canastas.get()).toBe(expected);
  });
});

it('has a go out field', () => {
  const list = new StatList();
  expect(list.go_out).toBeInstanceOf(Stat);
  expect(list.go_out.minimum).toBe(0);
  expect(list.go_out.value).toBe(0);
  expect(list.go_out.maximum).toBe(1);
  [[0, 0], [1, 100]].forEach(([value, expected]) => {
    list.go_out.set(value);
    expect(list.go_out.get()).toBe(expected);
  });
});

it('has a score field', () => {
  const list = new StatList();
  expect(list.score).toBeInstanceOf(Stat);
  expect(list.score.minimum).toBe(Number.MIN_SAFE_INTEGER);
  expect(list.score.value).toBe(0);
  expect(list.score.maximum).toBe(Number.MAX_SAFE_INTEGER);
  [1, 10, 33, -33, -43, 1000, 0].forEach(value => {
    list.score.set(value);
    expect(list.score.get()).toBe(value);
  });
});

it('has an exact copy', () => {
  const list = new StatList();
  const copy = new StatList(list);
  const converter = (list) => {
    if (list instanceof Object) {
      const out = {};
      for (const property in list) {
        out[property] = converter(list[property]);
      }
      return out;
    }
    return list;
  };
  expect(converter(copy)).toMatchObject(converter(list));
});
