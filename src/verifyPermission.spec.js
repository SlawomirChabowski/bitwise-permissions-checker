import { expect, test } from 'vitest';
import { verifyPermission } from './verifyPermission';

test('a store with a single permission has it', () => {
  const store = 1; // 0001
  expect(verifyPermission(store, 0)).toBe(true);
});

test('a store with no permission does not have it', () => {
  const store = 0; // 0000
  expect(verifyPermission(store, 0)).toBe(false);
});

test('a store with a non-intersecting permissino does not have the given', () => {
  const store = 2; // 0010
  expect(verifyPermission(store, 0)).toBe(false);
});

test('a store with multiple permissions has them', () => {
  const store = 3; // 0011
  expect(verifyPermission(store, 0)).toBe(true);
  expect(verifyPermission(store, 1)).toBe(true);
});


test('a store with multiple permissions to have only one of them', () => {
  const store = 2; // 0010
  expect(verifyPermission(store, 0)).toBe(false);
  expect(verifyPermission(store, 1)).toBe(true);
});

test('a store with multiple permissions to have none of the given', () => {
  const store = 8; // 1000
  expect(verifyPermission(store, 0)).toBe(false);
  expect(verifyPermission(store, 1)).toBe(false);
});
