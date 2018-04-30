class Life {
  constructor(years) {
    this.years = years;
  }
  expectency(lastYear){
    let time = lastYear - this.years;
    if(time > 0){
      return time + "years left.";
    }else if (time < 0){
      return Math.abs(time) + "years late.";
    }
  }
}

export { Life };
