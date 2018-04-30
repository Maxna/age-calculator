class Life {
  constructor() {
    this.years = years;
  }
  expectency(lastYear){
    let time = lastYear - this.years;
    if(time > 0){
      return time + "years left.";
    }else if (time < 0){
      return math.abs(time) + "years late.";
    }
  }
}

export { Life };
