class Stat {
  constructor(score, lowest, greatest, value) {
    this.minimum = lowest;
    this.maximum = greatest;
    this.score_function = score;
    this.set(value);
  }

  increment() {
    if (this.value === this.maximum)
      return;
    this.value += 1;
  }

  decrement() {
    if (this.value === this.minimum)
      return;
    this.value -= 1;
  }

  set(value) {
    if (value < this.minimum)
      this.value = this.minimum;
    else if (value > this.maximum)
      this.value = this.maximum;
    else
      this.value = value;
  }

  get() {
    return this.score_function(this.value);
  }
}

export default Stat;
