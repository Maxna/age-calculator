import { Age } from './../src/earth.js';
import { Planet } from './../src/planets.js';
describe('Age', function() {
  it('should convert input age from years to seconds', function() {
    let solarAge = new Age(1);
    console.log(solarAge.earth);
    expect(solarAge.earth).toEqual(31536000);
  });
});

describe('Planet', function() {
  it('should convert input age from earth to mercury', function() {
    let planetAge = new Planet(1);
    console.log(planetAge.merc);
    expect(planetAge.merc).toEqual(4);
  });
});
