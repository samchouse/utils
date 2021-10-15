import { gcf } from '../';

describe('test gcf calculator', () => {
  it('should answer with right gcf', () => {
    const result = gcf(12, 18);

    expect(result).toBe(6);
  });

  it('should answer with right gcf', () => {
    const result = gcf(-12, 18);

    expect(result).toBe(6);
  });

  it('should answer with right gcf', () => {
    const result = gcf(12, -18);

    expect(result).toBe(6);
  });

  it('should answer with right gcf', () => {
    const result = gcf(-12, -18);

    expect(result).toBe(6);
  });
});
