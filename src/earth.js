class Age {
  constructor(years){
    this.years = years;
  }

  earthAge(){
    // const earthSec = 31536000;
    let time = this.years * 31536000;
    return time;
  }
}

export { Age };
