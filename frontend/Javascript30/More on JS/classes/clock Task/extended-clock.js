import Clock from "./clock.mjs";

class ExtendedClock extends Clock {
  constructor({ precision = 1000, ...options }) {
    super(options);
    this.precision = precision;
  }
  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }
}
