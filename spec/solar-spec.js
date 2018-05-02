import { Age } from './../src/earth.js';
import { Planet } from './../src/planets.js';
import { Life } from './../src/life.js';
import { Date } from './../src/time.js';

describe('Age', function() {
  it('should convert input age from years to seconds', function() {
    let solarAge = new Age(1);
    expect(solarAge.earthAge()).toEqual(31536000);
  });

});

describe('Planet', function() {
  let planetAge;

  beforeEach(function() {
    planetAge = new Planet(1);
  });

  it('should convert input age from earth to mercury', function() {
    expect(planetAge.mercury()).toEqual(0.24);
  });

  it('should convert input age from earth to venus', function() {
    expect(planetAge.venus()).toEqual(0.62);
  });

  it('should convert input age from earth to mars', function() {
    expect(planetAge.mars()).toEqual(1.88);
  });

  it('should convert input age from earth to jupiter', function() {
    expect(planetAge.jupiter()).toEqual(11.86);
  });

});

describe('Life', function() {
  let lifeTime;

  beforeEach(function() {
    lifeTime = new Life(26);
  });

  it('should return positive life expectency', function() {
    expect(lifeTime.expectency(30)).toEqual("4 years left.");
  });

  it('should return negative life expectency', function() {
    expect(lifeTime.expectency(20)).toEqual("6 years late.");
  });

});

describe('Date', function() {
  it('should return the difference between two dates', function() {
    // let past = new Date(2017, 3, 20);
    let present = new Date(2018, 3, 20);
    console.log(present.getTime());
    // let currentDay = presentDay.getDate();
    // let currentMonth = presentDay.getMonth();
    // let currentYear = presentDay.getFullYear();
    // expect(past.calculate(present, past)).toEqual(31536000);
  });

});
