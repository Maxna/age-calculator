class Age {
  constructor (years) {
    const earthSec = 31536000;
    this.years = years * earthSec;
  }
}

export {Age};
