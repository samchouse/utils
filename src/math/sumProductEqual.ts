import { factorsOf } from '.';

const sumProductEquals = (sum: number, product: number) => {
  const factors = factorsOf(product, { group: true }) as number[][];

  return factors.filter(
    (factor) => factor.reduce((a, b) => a + b, 0) === sum
  )[0];
};

export default sumProductEquals;
