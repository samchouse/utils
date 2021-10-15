expect.extend({
  toMatchRandom(received: number[], mocked: jest.Mock) {
    if (received.length !== mocked.mock.calls[0][0])
      return {
        pass: false,
        message: () =>
          `Expected array length to be ${
            mocked.mock.calls[0][0] as string
          }, but got ${received.length}`
      };

    if (received.filter((num) => num < mocked.mock.calls[0][1]).length)
      return {
        pass: false,
        message: () =>
          `Expected array to contain numbers greater than ${
            mocked.mock.calls[0][1] as string
          }, but got ${received.filter(
            (num) => num < mocked.mock.calls[0][1]
          )[0]!}`
      };

    if (received.filter((num) => num > mocked.mock.calls[0][2]).length)
      return {
        pass: false,
        message: () =>
          `Expected array to contain numbers less than ${
            mocked.mock.calls[0][1] as string
          }, but got ${received.filter(
            (num) => num < mocked.mock.calls[0][1]
          )[0]!}`
      };

    if (mocked.mock.calls[0][3] && new Set(received).size !== received.length)
      return {
        pass: false,
        message: () =>
          `Expected array to contain numbers less than ${
            mocked.mock.calls[0][1] as string
          }, but got ${received.filter(
            (num) => num < mocked.mock.calls[0][1]
          )[0]!}`
      };

    return {
      pass: true,
      message: () =>
        `Expected ${received.join(
          ', '
        )} to be a random number array within range`
    };
  }
});
