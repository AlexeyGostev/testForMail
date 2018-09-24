
class AgeCount {
  constructor() {
    this.count = 1;
  }
  toString(){
    return this.count++;
  }
}

module.exports = new AgeCount();