declare namespace jest {
	interface Matchers<R> {
		toMatchRandom(mocked: jest.Mock): R;
	}
}
