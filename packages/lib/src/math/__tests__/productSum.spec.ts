import productSum from '../productSum';

describe('test productSum calculator', () => {
  it('should answer with right productSum', () => {
    const result = productSum(40, 14);

    expect(result).toEqual([4, 10]);
  });

  it('should answer with right productSum', () => {
    const result = productSum(16, -8);

    expect(result).toEqual([-4, -4]);
  });

  it('should answer with right productSum', () => {
    const result = productSum(-32, 4);

    expect(result).toEqual([-4, 8]);
  });

  it('should answer with right productSum', () => {
    const result = productSum(-32, -4);

    expect(result).toEqual([-8, 4]);
  });
});
