import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ICharacterDto } from '../dto/character.dto';

const decoupages = [30, 50, 70, 90, 101];
const rarities = ['B', 'A', 'S', 'SS', 'SSS'];

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  http = inject(HttpClient);

  characters: ICharacterDto[] = [];

  constructor() {
    this.http
      .post<ICharacterDto[]>('./json/characters.json', {})
      .subscribe((resp) => {
        this.characters = resp;

        let min = -1;
        let size = 0;
        for (const decoupage of decoupages) {
          const max = decoupage;
          const characters = this.getCharacters(min, max);
          console.log(
            min,
            max,
            rarities[decoupages.indexOf(decoupage)],
            characters.length
          );
          size += characters.length;
          min = max;
        }
        console.log('restant : ', this.characters.length - size);

        const naze = this.getCharacters(0, 30);
        const medium = this.getCharacters(30, 90);
        const god = this.getCharacters(90, 100);
        console.log(
          naze.length,
          medium.length,
          god.length,
          this.characters.length,
          this.characters.length - naze.length - medium.length - god.length
        );
      });
  }

  getCharacters(min: number, max: number): ICharacterDto[] {
    return this.characters.filter(
      (character) =>
        character.powerstats.combat > min && character.powerstats.combat <= max
    );
  }

  getRandom(table: Array<string | number | {}>): any {
    const randomIndex = Math.floor(Math.random() * table.length);
    return randomIndex;
  }

  pool() {
    const raritySeeds = [];
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

    const pools: ICharacterDto[] = [];
    for (let i = 0; i < 10; i++) {
      const rarityValue = raritySeeds[this.getRandom(raritySeeds)];
      const decoupageIndex = rarities.indexOf(rarityValue);
      const characters = this.getCharacters(
        decoupageIndex > 0 ? decoupages[decoupageIndex - 1] : -1,
        decoupages[decoupageIndex]
      );
      pools.push({
        ...characters[this.getRandom(characters)],
        rarity: rarities[decoupageIndex],
      });
    }
    return pools;
  }
}
