const factorsOf = (sum: number, options?: { group: boolean }) => {
  const getFactors = (
    sum: number,
    options?: { group: boolean; isNegative?: boolean }
  ) => {
    const factorsNoGroups: number[] = [];

    for (let i = 1; i <= sum; i++) {
      if (sum % i === 0) {
        factorsNoGroups.push(i);
      }
    }

    if (options?.group) {
      const factorsTwoDimensional: number[][] = factorsNoGroups.map(
        (factor) => [factor, sum / factor]
      );

      if (!options.isNegative) {
        const factors: number[][] = [];

        factorsTwoDimensional.map((factorArray) =>
          factors.filter(
            (factorArray2) =>
              factorArray2[0] === factorArray[1] &&
              factorArray2[1] === factorArray[0]
          ).length
            ? null
            : factors.push(factorArray)
        );

        return factors;
      }

      return factorsTwoDimensional.map((factorArray) => [
        -factorArray[0]!,
        factorArray[1]!
      ]);
    }

    return factorsNoGroups;
  };

  if (Math.sign(sum) === -1)
    return getFactors(Math.abs(sum), {
      group: true,
      isNegative: true
    });

  return getFactors(sum, options);
};

export default factorsOf;
