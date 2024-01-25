import getStatus from '../getstatus';

test.each([
  ['healthy', { name: 'Маг', health: 90 }],
  ['wounded', { name: 'Лучник', health: 30 }],
  ['critical', { name: 'Воин', health: 10 }],
])('function must show status %s', (expected, obj) => {
  const result = getStatus(obj);
  expect(result).toBe(expected);
});
