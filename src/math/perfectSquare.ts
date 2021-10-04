const perfectSquare = (middle: number, ...nums: number[]) => {
  if (nums.length !== 2) throw new Error('Expected 2 numbers to square');

  const squares = nums.map((n) => Math.sqrt(n));
  if (squares.filter((s) => s % 1 !== 0).length)
    return {
      perfectSquare: false,
      message: `Cannot square number(s) ${squares
        .map((s, i) => (s % 1 === 0 ? undefined : i))
        .map((i) => (typeof i === 'number' ? nums[i] : undefined))
        .filter((n) => n !== undefined)
        .join(', ')}`
    };

  if (2 * squares[0]! * squares[1]! !== middle)
    return { perfectSquare: false, message: 'Does not equal middle' };

  return { perfectSquare: true, squares: squares };
};

export default perfectSquare;
