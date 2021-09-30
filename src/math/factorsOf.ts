const factorsOf = (number: number) => {
  const factors: number[] = [];

  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      factors.push(i);
    }
  }

  return factors;
};

export default factorsOf;
