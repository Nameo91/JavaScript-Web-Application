class CounterModel {
  constructor() {
    console.log('Hello this is a counter');
    this.counter = 0;
  }

  getCounter() {
    return this.counter;
  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }
}

module.exports = CounterModel;
