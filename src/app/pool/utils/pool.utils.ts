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
  const randomIndex = Math.floor(Math.random() * table.length);
  return randomIndex;
};
