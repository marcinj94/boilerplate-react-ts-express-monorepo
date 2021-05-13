import { isNumber } from './isNumber';

describe('isNumber Utils', () => {
  it('Its a number', () => {
    [0, 1, 2, -1, 1.345e17, 1.5653].forEach((n) => {
      expect(isNumber(n)).toEqual(true);
    });
  });

  it('Its not a number', () => {
    // eslint-disable-next-line object-curly-newline
    [false, true, NaN, [], {}, '1a'].forEach((n) => {
      expect(isNumber(n)).toEqual(false);
    });
  });
});
