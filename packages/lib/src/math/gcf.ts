const gcf = (...numbers: number[]) => {
  const calculate = (a: number, b: number) => {
    if (b === 0) return Math.abs(a);

    return calculate(b, a % b);
  };

  let gcf = 0;

  for (const number of numbers) gcf = calculate(number, gcf);

  return gcf;
};

export default gcf;
