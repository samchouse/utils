import { space } from '../';

describe('test space util', () => {
  it('should respond with valid space', () => {
    const result = space('Why is space a thing? Just because!');

    expect(result).toBe(
      'W h y   i s   s p a c e   a   t h i n g ?   J u s t   b e c a u s e !'
    );
  });
});
