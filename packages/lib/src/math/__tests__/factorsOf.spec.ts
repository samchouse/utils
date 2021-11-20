import factorsOf from '../factorsOf';

describe('test factorsOf calculator', () => {
  it('should answer with right factors', () => {
    const result = factorsOf(12);

    expect(result).toEqual([1, 2, 3, 4, 6, 12]);
  });

  it('should answer with right factors', () => {
    const result = factorsOf(-12);

    expect(result).toEqual([
      [-1, 12],
      [-2, 6],
      [-3, 4],
      [-4, 3],
      [-6, 2],
      [-12, 1]
    ]);
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
