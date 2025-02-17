import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { ICharacterDto } from '../dto/character.dto';
import { getRarities, getRarity } from '../utils/character.utils';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  http = inject(HttpClient);

  raritySeeds: string[] = [];
  characters: WritableSignal<ICharacterDto[]> = signal([]);

  constructor() {
    this.load();
  }

  load() {
    this.http
      .post<ICharacterDto[]>('./json/characters.json', {})
      .subscribe((characters) => {
        this.characters.set(
          characters.map((character) => {
            return { ...character, rarity: getRarity(character) };
          })
        );
        this.raritySeeds = getRarities();
      });
  }

  getCharactersFromCombat(min: number, max: number): ICharacterDto[] {
    return this.characters().filter(
      (character) =>
        character.powerstats.combat > min && character.powerstats.combat <= max
    );
  }

  countByRarity(rarity: string): number {
    return this.characters().filter((character) => character.rarity === rarity)
      .length;
  }
}
