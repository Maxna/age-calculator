class Planet {
  constructor (years) {
    this.years = years;
  }

  mercury() {
    let mercAge = this.years * (0.24);
    return mercAge;
  }

  venus() {
    let venusAge = this.venus * (0.62);
    return venusAge;
  }

  mars() {
    let marsAge = this.mars * (1.88);
    return marsAge;
  }

  jupiter() {
    let jupiterAge = this.jupiter *(11.86);
    return jupiterAge;
  }
}

export {Planet};
