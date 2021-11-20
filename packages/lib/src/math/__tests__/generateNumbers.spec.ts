import generateNumbers from '../generateNumbers';

describe('test number generator', () => {
  const mockGenerateNumbers = jest.fn(generateNumbers);

  afterEach(() => mockGenerateNumbers.mockClear());

  it('should return valid numbers', () => {
    const result = mockGenerateNumbers(10, 1, 10);

    expect(result).toMatchRandom(mockGenerateNumbers);
  });

  it('should return valid numbers', () => {
    const result = mockGenerateNumbers(1000, 1, 1000, false);

    expect(result).toMatchRandom(mockGenerateNumbers);
  });

  it('should throw error', () => {
    expect(() => generateNumbers(1, 10, 1, false)).toThrow(
      'Cannot have a bigger min than max'
    );
  });

  it('should throw error', () => {
    expect(() => generateNumbers(11, 1, 10, false)).toThrow(
      'Cannot have a bigger amount of possibilites than the range of numbers available'
    );
  });
});
