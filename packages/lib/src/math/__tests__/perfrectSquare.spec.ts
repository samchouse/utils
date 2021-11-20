import perfectSquare from '../perfectSquare';

describe('test perfectSquare calculator', () => {
  it('should answer with perfectSquare', () => {
    const result = perfectSquare(80, 16, 100);

    expect(result).toEqual({ perfectSquare: true, squares: [4, 10] });
  });

  it('should answer with perfectSquare', () => {
    const result = perfectSquare(80, 19, 100);

    expect(result).toEqual({
      perfectSquare: false,
      message: 'Cannot square number(s) 19'
    });
  });

  it('should answer with perfectSquare', () => {
    const result = perfectSquare(90, 16, 100);

    expect(result).toEqual({
      perfectSquare: false,
      message: 'Does not equal middle'
    });
  });

  it('should answer with perfectSquare', () => {
    expect(() => perfectSquare(80)).toThrow('Expected 2 numbers to square');
  });
});
