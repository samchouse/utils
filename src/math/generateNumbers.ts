const generateNumbers = (
  amount: number,
  min: number,
  max: number,
  duplicates = true
) => {
  const randomNumber = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  if (min > max) throw new Error('Cannot have a bigger min than max');

  if (amount > Math.abs(max) - min + 1 && !duplicates)
    throw new Error(
      'Cannot have a bigger amount of possibilites than the range of numbers available'
    );

  const nums: number[] = [];

  for (let i = 0; i < amount; i++) {
    let num = randomNumber(min, max);

    while (!duplicates && nums.includes(num)) num = randomNumber(min, max);

    nums.push(num);
  }

  return nums;
};

export default generateNumbers;
