import { secAge } from './../src/earth.js';
import { Planet } from './../src/planets.js';
describe('Age', function() {
  it('should convert input age from years to seconds', function() {
    let solarAge = new secAge(1);
    console.log(solarAge.earthAge());
    expect(solarAge.earthAge()).toEqual(31536000);
  });
});

describe('Planet', function() {
  it('should convert input age from earth to mercury', function() {
    let planetAge = new Planet(1);
    console.log(planetAge.mercury());
    expect(planetAge.mercury()).toEqual(0.24);
  });
  it('should convert input age from earth to venus', function() {
    let planetAge = new Planet(1);
    console.log(planetAge.venus());
    expect(planetAge.venus()).toEqual(0.62);
  });
  it('should convert input age from earth to mars', function() {
    let planetAge = new Planet(1);
    console.log(planetAge.mars());
    expect(planetAge.mars()).toEqual(1.88);
  });
  it('should convert input age from earth to jupiter', function() {
    let planetAge = new Planet(1);
    console.log(planetAge.jupiter());
    expect(planetAge.jupiter()).toEqual(11.86);
  });
});
