import { factorsOf } from '../';

describe('test factorsOf calculator', () => {
  it('should answer with right factors', () => {
    const result = factorsOf(12);

    expect(result).toEqual([1, 2, 3, 4, 6, 12]);
  });

  it('should answer with right factors', () => {
    const result = factorsOf(12, { group: true });

    expect(result).toEqual([
      [1, 12],
      [2, 6],
      [3, 4]
    ]);
  });
});
