import { aResolvers } from '../../src';

describe('Async > aResolvers', () => {
  test('resolve', async () => {
    const { promise, resolve, reject } = aResolvers();
    resolve('fulfilled');
    await expect(promise).resolves.toBe('fulfilled');
  });

  test('reject', async () => {
    const { promise, resolve, reject } = aResolvers();

    reject(new Error('Rejected'));
    await expect(promise).rejects.toThrow('Rejected');
  });
});
