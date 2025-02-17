import { ICharacterDto } from '../dto/character.dto';

export const DECOUPAGES = [30, 50, 70, 90, 101];
export const RARITIES = ['B', 'A', 'S', 'SS', 'SSS'];

export const getRarities = (): string[] => {
  const raritySeeds: string[] = [];
  for (let i = 0; i < 100; i++) {
    let rarity = 'B';
    if (i > 98) {
      rarity = 'SSS';
    } else if (i > 95) {
      rarity = 'SS';
    } else if (i > 90) {
      rarity = 'S';
    } else if (i > 60) {
      rarity = 'A';
    }
    raritySeeds.push(rarity);
  }
  return raritySeeds;
};

export const getRarity = (character: ICharacterDto): string => {
  let index = -1;
  for (let i = 0, length = DECOUPAGES.length; i < length; i++) {
    if (
      character.powerstats.combat > (i > 0 ? DECOUPAGES[i - 1] : -1) &&
      character.powerstats.combat <= DECOUPAGES[i]
    ) {
      index = i;
      break;
    }
  }
  return index > -1 ? RARITIES[index] : '';
};
