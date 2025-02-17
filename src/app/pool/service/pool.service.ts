import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { ICharacterDto } from '../../character/dto/character.dto';
import { CharacterService } from '../../character/service/character.service';
import { DECOUPAGES, RARITIES } from '../../character/utils/character.utils';
import { CollectionService } from '../../collection/service/collection.service';
import { IPoolDto } from '../dto/pool.dto';
import { getRandom, newPool } from '../utils/pool.utils';

@Injectable({
  providedIn: 'root',
})
export class PoolService {
  characterService = inject(CharacterService);
  collectionService = inject(CollectionService);

  pool: IPoolDto = newPool();
  characters: WritableSignal<ICharacterDto[]> = signal([]);

  doPool() {
    this.pool.count++;
    const pools: ICharacterDto[] = [];
    for (let i = 0; i < 10; i++) {
      const rarityValue =
        this.characterService.raritySeeds[
          getRandom(this.characterService.raritySeeds)
        ];
      const decoupageIndex = RARITIES.indexOf(rarityValue);
      const characters = this.characterService.getCharactersFromCombat(
        decoupageIndex > 0 ? DECOUPAGES[decoupageIndex - 1] : -1,
        DECOUPAGES[decoupageIndex]
      );
      const character = {
        ...characters[getRandom(characters)],
        rarity: RARITIES[decoupageIndex],
      };
      pools.push(character);
      this.collectionService.collect(character);
      this.pool[('nb' + rarityValue) as keyof IPoolDto]++;
    }
    this.characters.set(pools);
    this.collectionService.save();
  }
}
