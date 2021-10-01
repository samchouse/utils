import { sumProductEqual } from '../';

describe('test sumProductEqual calculator', () => {
  it('should answer with right sumProductEqual', () => {
    const result = sumProductEqual(14, 40);

    expect(result).toEqual([4, 10]);
  });

  it('should answer with right sumProductEqual', () => {
    const result = sumProductEqual(-8, 16);

    expect(result).toBe([-4, -4]);
  });

  it('should answer with right sumProductEqual', () => {
    const result = sumProductEqual(4, -32);

    expect(result).toEqual([-4, 8]);
  });

  it('should answer with right sumProductEqual', () => {
    const result = sumProductEqual(-4, -32);

    expect(result).toEqual([-8, 4]);
  });
});
