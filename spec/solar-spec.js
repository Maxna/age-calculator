import { EarthAge } from './../src/earth.js';
describe('earth', function() {

  it('should convert input age from years to seconds', function() {
    const earthAge = new EarthAge(1);
    expect(earthAge.years).toEqual(2);
  });
});
