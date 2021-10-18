import { productSum } from '..';

describe('test productSum calculator', () => {
  it('should answer with right productSum', () => {
    const result = productSum(14, 40);

    expect(result).toEqual([4, 10]);
  });

  it('should answer with right productSum', () => {
    const result = productSum(-8, 16);

    expect(result).toEqual([-4, -4]);
  });

  it('should answer with right productSum', () => {
    const result = productSum(4, -32);

    expect(result).toEqual([-4, 8]);
  });

  it('should answer with right productSum', () => {
    const result = productSum(-4, -32);

    expect(result).toEqual([-8, 4]);
  });
});
