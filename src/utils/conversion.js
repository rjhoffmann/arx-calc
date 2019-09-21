import _find from 'lodash/find';
import _findLast from 'lodash/findLast';

import { types as currencyTypes } from './currencies';

const knownValues = [
  { arx: 5000, bonus: 0, gbp: 2.99, eur: 3.49, usd: 3.99 },
  { arx: 8400, bonus: 420, gbp: 4.99, eur: 5.99, usd: 6.99 },
  { arx: 16800, bonus: 900, gbp: 9.59, eur: 11.49, usd: 12.99 },
  { arx: 25500, bonus: 1300, gbp: 12.99, eur: 15.99, usd: 18.99 },
  { arx: 51000, bonus: 3000, gbp: 24.99, eur: 29.99, usd: 37.99 },
  { arx: 85000, bonus: 15000, gbp: 44.99, eur: 54.99, usd: 59.99 },
];

export const endpoints = (value, isArx, currencyType = currencyTypes.usd) => {
  const a =_findLast(knownValues, (v) => isArx ? v.arx + v.bonus <= value : v[currencyType] <= value)
    || { arx: 0, bonus: 0, gbp: 0, eur: 0, usd: 0 };

  const b = _find(knownValues, (v) => isArx ? v.arx + v.bonus >= value : v[currencyType] >= value)
    || { arx: 170000, bonus: 30000, gbp: 89.98, eur: 109.98, usd: 119.98 };

  return [
    { x: a.arx + a.bonus, y: a[currencyType] },
    { x: b.arx + b.bonus, y: b[currencyType] },
  ];
};

export const slope = ([a, b]) => (b.y - a.y)/(b.x - a.x);
export const intercept = (m, {x, y}) => y - (m * x);

export default knownValues;
