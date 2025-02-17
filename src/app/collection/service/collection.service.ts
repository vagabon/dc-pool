import {
  afterNextRender,
  Injectable,
  signal,
  WritableSignal,
} from '@angular/core';
import { ICharacterDto } from '../../character/dto/character.dto';
import { ICollectionDto } from '../dto/collection.dto';

@Injectable({
  providedIn: 'root',
})
export class CollectionService {
  collections: WritableSignal<ICollectionDto[]> = signal([]);

  constructor() {
    afterNextRender(() => {
      this.load();
    });
  }

  collect(character: ICharacterDto) {
    if (
      this.collections().find((collection) => collection.id === character.id)
    ) {
      this.collections.set(
        this.collections().map((collection) => {
          if (collection.id === character.id) {
            collection.nb++;
          }
          return collection;
        })
      );
    } else {
      this.collections.update((collection) => {
        collection.push({
          id: character.id,
          nb: 1,
          star: 0,
          power: 0,
        });
        return collection;
      });
    }
  }

  save() {
    localStorage.setItem('collections', JSON.stringify(this.collections()));
  }

  load() {
    const collection = localStorage.getItem('collections');
    if (collection) {
      try {
        this.collections.set(JSON.parse(collection));
      } catch (_) {
        this.collections.set([]);
      }
    }
  }
}
