import Stat from './stat';

class StatList {
  constructor(stat_list = undefined) {
    if (stat_list === undefined) {
      this.perfect_deal = new Stat(x => x * 100, 0, 1, 0);
      this.red_threes = new Stat(x => Math.abs(x) === 4 ? (Math.sign(x) * 800) : x * 100, -4, 4, 0);
      this.mixed_canastas = new Stat(x => x * 300, 0, Number.MAX_SAFE_INTEGER, 0);
      this.natural_canastas = new Stat(x => x * 500, 0, Number.MAX_SAFE_INTEGER, 0);
      this.go_out = new Stat(x => x * 100, 0, 1, 0);
      this.score = new Stat(x => x, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, 0);
    } else {
      this.perfect_deal = new Stat(x => x * 100, 0, 1, stat_list.perfect_deal.value);
      this.red_threes = new Stat(x => x === 4 ? 800 : x * 100, 0, 4, stat_list.red_threes.value);
      this.mixed_canastas = new Stat(x => x * 300, 0, Number.MAX_SAFE_INTEGER, stat_list.mixed_canastas.value);
      this.natural_canastas = new Stat(x => x * 500, 0, Number.MAX_SAFE_INTEGER, stat_list.natural_canastas.value);
      this.go_out = new Stat(x => x * 100, 0, 1, stat_list.go_out.value);
      this.score = new Stat(x => x, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, stat_list.score.value);
    }
  }

  get() {
    return this.perfect_deal.get()
        + this.red_threes.get()
        + this.mixed_canastas.get()
        + this.natural_canastas.get()
        + this.go_out.get();
  }
}

export default StatList;
