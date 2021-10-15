import { factorsOf } from '.';

const sumProductEquals = (sum: number, product: number) => {
  const factors = factorsOf(product, { group: true }) as number[][];

  if (Math.sign(sum) === -1 && Math.sign(product) === 1)
    return factors
      .map((factor) => [-factor[0]!, -factor[1]!])
      .filter((factor) => factor.reduce((a, b) => a + b, 0) === sum)[0];

  return factors.filter(
    (factor) => factor.reduce((a, b) => a + b, 0) === sum
  )[0];
};

export default sumProductEquals;
