import { Age } from './../src/earth.js';
import { Planet } from './../src/planets.js';
import { Life } from './../src/life.js';
import { Dates } from './../src/time.js';

describe('Age', function() {
  it('should convert input age from years to seconds', function() {
    let solarAge = new Age(1);
    expect(solarAge.earthAge()).toEqual(31536000);
  });
});

describe('Planet', function() {
  it('should convert input age from earth to mercury', function() {
    let planetAge = new Planet(1);
    expect(planetAge.mercury()).toEqual(0.24);
  });
  it('should convert input age from earth to venus', function() {
    let planetAge = new Planet(1);
    expect(planetAge.venus()).toEqual(0.62);
  });
  it('should convert input age from earth to mars', function() {
    let planetAge = new Planet(1);
    expect(planetAge.mars()).toEqual(1.88);
  });
  it('should convert input age from earth to jupiter', function() {
    let planetAge = new Planet(1);
    expect(planetAge.jupiter()).toEqual(11.86);
  });
});

describe('Life', function() {
  it('should return positive life expectency', function() {
    let lifeTime = new Life(26);
    expect(lifeTime.expectency(30)).toEqual("4 years left.");
  });
  it('should return negative life expectency', function() {
    let lifeTime = new Life(26);
    expect(lifeTime.expectency(20)).toEqual("6 years late.");
  });
});

describe('Dates', function() {
  it('should return the difference between two dates', function() {
    let otherDates = new Dates(2018,4,29);
    let earlyDates = new Dates(2017,4,29);
    let currentDay = otherDates.getDate();
    let currentMonth = otherDates.getMonth();
    let currentYear = otherDates.getFullYear();
    expect(earlyDates.differentDate(currentYear,currentMonth,currentDay)).toEqual(31536000);
  });
});
