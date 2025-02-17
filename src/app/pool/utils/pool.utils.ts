import { IPoolDto } from '../dto/pool.dto';

export const newPool = (): IPoolDto => {
  return {
    count: 0,
    ids: [],
    nbB: 0,
    nbA: 0,
    nbS: 0,
    nbSS: 0,
    nbSSS: 0,
  };
};

export const getRandom = (table: Array<string | number | {}>): number => {
  const randomIndex = Math.floor(getSecureRandom(table.length));
  return randomIndex;
};

export const getSecureRandom = (number: number): number => {
  const array = new Uint32Array(1);
  window.crypto.getRandomValues(array);
  return array[0] % number;
};
