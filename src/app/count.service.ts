export class CountService {
  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  addActiveToInactiveCounter() {
    this.activeToInactiveCounter++;
    console.log(this.activeToInactiveCounter);
  }

  subtractInactiveToActiveCounter() {
    this.inactiveToActiveCounter++;
    console.log(this.inactiveToActiveCounter);
  }

  constructor() { }
}
