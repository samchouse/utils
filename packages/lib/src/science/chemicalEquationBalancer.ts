const chemicalEquationBalancer = (equation: string) => {
  if (
    !/^((((\d*)([A-Z][a-z]*)(\d*))([\s\+]*))+)(\s*\=\s*)((((\d*)([A-Z][a-z]*)(\d*))([\s\+]*))+)$/.test(
      equation
    )
  )
    return { balanced: false, message: 'Invalid equation' };

  const parse = (equation: string) => {
    const initialValues = equation
      .split('=')[0]!
      .split('+')
      .map((v) => v.replace(/\s/g, ''))
      .filter(Boolean);
    const finalValues = equation
      .split('=')[1]!
      .split('+')
      .map((v) => v.replace(/\s/g, ''))
      .filter(Boolean);

    if (!initialValues.length || !finalValues.length)
      return { balanced: false, message: 'Invalid equation' };

    const initialValuesMap: {
      equation: number;
      atoms: { symbol: string; amount: number }[];
    }[] = [];
    const finalValuesMap: {
      equation: number;
      atoms: { symbol: string; amount: number }[];
    }[] = [];

    let initialEquationNum = 1;
    for (const initialValue of initialValues) {
      const match = initialValue.match(/^\d+/);
      const extraNum = match?.length ? match[0] : undefined;
      const extra = extraNum
        ? isNaN(parseInt(extraNum, 10))
          ? 0
          : parseInt(extraNum, 10)
        : 0;

      const matches = initialValue.match(/([A-Z][a-z]*)(\d*)/g);
      matches?.map((match) => {
        const [symbol, amountString] = match.split(/(\d+)/).filter(Boolean);

        const amount = amountString
          ? isNaN(parseInt(amountString, 10))
            ? 1
            : parseInt(amountString, 10)
          : 1;

        const existing = initialValuesMap.find(
          (v) =>
            v.equation === initialEquationNum &&
            v.atoms.find((a) => a.symbol === symbol)
        );
        if (existing?.atoms)
          initialValuesMap[initialValuesMap.indexOf(existing)]!.atoms[
            initialEquationNum - 1
          ] = {
            symbol: symbol!,
            amount:
              existing.atoms[0]!.amount +
              (extra === 0 ? amount : extra * amount)
          };
        else
          initialValuesMap.find((v) => v.equation === initialEquationNum)
            ? initialValuesMap[
                initialValuesMap.indexOf(
                  initialValuesMap.find(
                    (v) => v.equation === initialEquationNum
                  )!
                )
              ]?.atoms.push({
                symbol: symbol!,
                amount: extra === 0 ? amount : extra * amount
              })
            : initialValuesMap.push({
                equation: initialEquationNum,
                atoms: [
                  {
                    symbol: symbol!,
                    amount: extra === 0 ? amount : extra * amount
                  }
                ]
              });
      });

      initialEquationNum += 1;
    }

    let finalEquationNum = 1;
    for (const finalValue of finalValues) {
      const match = finalValue.match(/^\d+/);
      const extraNum = match?.length ? match[0] : undefined;
      const extra = extraNum
        ? isNaN(parseInt(extraNum, 10))
          ? 0
          : parseInt(extraNum, 10)
        : 0;

      const matches = finalValue.match(/([A-Z][a-z]*)(\d*)/g);
      matches?.map((match) => {
        const [symbol, amountString] = match.split(/(\d+)/).filter(Boolean);

        const amount = amountString
          ? isNaN(parseInt(amountString, 10))
            ? 1
            : parseInt(amountString, 10)
          : 1;

        const existing = finalValuesMap.find(
          (v) =>
            v.equation === finalEquationNum &&
            v.atoms.find((a) => a.symbol === symbol)
        );
        if (existing?.atoms)
          finalValuesMap[finalValuesMap.indexOf(existing)]!.atoms[
            finalEquationNum - 1
          ] = {
            symbol: symbol!,
            amount:
              existing.atoms[0]!.amount +
              (extra === 0 ? amount : extra * amount)
          };
        else
          finalValuesMap.find((v) => v.equation === finalEquationNum)
            ? finalValuesMap[
                finalValuesMap.indexOf(
                  finalValuesMap.find((v) => v.equation === finalEquationNum)!
                )
              ]?.atoms.push({
                symbol: symbol!,
                amount: extra === 0 ? amount : extra * amount
              })
            : finalValuesMap.push({
                equation: finalEquationNum,
                atoms: [
                  {
                    symbol: symbol!,
                    amount: extra === 0 ? amount : extra * amount
                  }
                ]
              });
      });

      finalEquationNum += 1;
    }

    return { initialValuesMap, finalValuesMap };
  };

  const { initialValuesMap, finalValuesMap } = parse(equation);
  if (!initialValuesMap || !finalValuesMap)
    return { balanced: false, message: 'Invalid equation' };

  const mysterySymbols: string[] = [];
  for (const initial of initialValuesMap) {
    for (const i of initial.atoms) {
      mysterySymbols.push(i.symbol);
    }
  }

  for (const final of finalValuesMap) {
    for (const j of final.atoms) {
      mysterySymbols.push(j.symbol);
    }
  }

  if (
    mysterySymbols.filter((v, i) => {
      const arr = [...mysterySymbols];
      arr.splice(i, 1);
      return !arr.includes(v);
    }).length
  )
    return { balanced: false, message: 'Invalid equation' };

  const check = () => {
    return initialValuesMap.filter(
      (initial) =>
        !finalValuesMap.find((final) =>
          initial.atoms
            .map((a) =>
              final.atoms.find(
                (b) => b.symbol === a.symbol && b.amount === a.amount
              )
                ? true
                : false
            )
            .includes(false)
        )
    );
  };

  if (
    initialValuesMap.length === finalValuesMap.length &&
    initialValuesMap.values.length === finalValuesMap.values.length &&
    initialValuesMap.map((v) => v.atoms.length)[0] ===
      finalValuesMap.map((v) => v.atoms.length)[0] &&
    check().length === initialValuesMap.length &&
    check().length === finalValuesMap.length
  )
    return { balanced: true };

  let solutionEq = equation;
  let balanced = 'Unbalanced';
  setTimeout(() => (balanced = 'Unable to balance'), 1000 * 15);

  while (balanced === 'Unbalanced') {
    const { initialValuesMap, finalValuesMap } = parse(equation);
    if (!initialValuesMap || !finalValuesMap)
      return { balanced: false, message: 'Invalid equation' };

    const check = () => {
      return initialValuesMap.filter(
        (initial) =>
          !finalValuesMap.find((final) =>
            initial.atoms
              .map((a) =>
                final.atoms.find(
                  (b) => b.symbol === a.symbol && b.amount === a.amount
                )
                  ? true
                  : false
              )
              .includes(false)
          )
      );
    };

    if (
      initialValuesMap.length === finalValuesMap.length &&
      initialValuesMap.values.length === finalValuesMap.values.length &&
      initialValuesMap.map((v) => v.atoms.length)[0] ===
        finalValuesMap.map((v) => v.atoms.length)[0] &&
      check().length === initialValuesMap.length &&
      check().length === finalValuesMap.length
    )
      balanced = 'Balanced';

    const flatInitial = [...initialValuesMap]
      .flatMap((v) => v.atoms)
      .map((curr, i, arr) => {
        const arrClone = [...arr];
        arrClone.splice(i, 1);

        if ([...arrClone].map((v) => v.symbol).includes(curr.symbol)) {
          arr.splice(i, 1);

          return {
            symbol: curr.symbol,
            amount:
              arrClone.find((v) => v.symbol === curr.symbol)!.amount +
              curr.amount
          };
        }

        return curr;
      })
      .filter(Boolean);
    const flatFinal = [...finalValuesMap]
      .flatMap((v) => v.atoms)
      .map((curr, i, arr) => {
        const arrClone = [...arr];
        arrClone.splice(i, 1);

        if ([...arrClone].map((v) => v.symbol).includes(curr.symbol)) {
          arr.splice(i, 1);

          return {
            symbol: curr.symbol,
            amount:
              arrClone.find((v) => v.symbol === curr.symbol)!.amount +
              curr.amount
          };
        }

        return curr;
      })
      .filter(Boolean);

    const solution: {
      additional: { symbol: string; amount: number }[];
      missing: { symbol: string; amount: number }[];
    } = { additional: [], missing: [] };
    for (const i of flatInitial) {
      for (const j of flatFinal) {
        if (i.symbol === j.symbol) {
          const amount = i.amount - j.amount;
          if (amount > 0) {
            const found = solution.additional.find(
              (a) => a.symbol === i.symbol
            );
            if (found)
              solution.additional[solution.additional.indexOf(found)] = {
                symbol: i.symbol,
                amount: found.amount + amount
              };
            else
              solution.additional.push({
                symbol: i.symbol,
                amount: amount
              });
          }
          if (amount < 0) {
            const found = solution.missing.find((m) => m.symbol === i.symbol);
            if (found)
              solution.missing[solution.missing.indexOf(found)] = {
                symbol: i.symbol,
                amount: found.amount + Math.abs(amount)
              };
            else
              solution.missing.push({
                symbol: i.symbol,
                amount: Math.abs(amount)
              });
          }
        }
      }
    }

    balanced = 'Balanced';
    solutionEq = ':(';
  }

  if (balanced === 'Balanced') return solutionEq;

  return { balanced: false, message: 'Something went wrong' };
};

export default chemicalEquationBalancer;
