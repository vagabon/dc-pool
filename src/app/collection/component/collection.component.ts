import { CommonModule } from '@angular/common';
import {
  Component,
  effect,
  inject,
  signal,
  WritableSignal,
} from '@angular/core';
import { Params } from '@angular/router';
import { BaseRouteComponent } from '@ng-vagabond-lab/ng-dsv/base';
import { CharacterShowComponent } from '../../character/component/character.show.component';
import { CharacterService } from '../../character/service/character.service';
import { ICollectionDto } from '../dto/collection.dto';
import { CollectionService } from '../service/collection.service';
import { CollectionFiltersComponent } from './filters/collection.filters.component';

@Component({
  selector: 'app-collection',
  imports: [CommonModule, CharacterShowComponent, CollectionFiltersComponent],
  standalone: true,
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.scss',
})
export class CollectionComponent extends BaseRouteComponent {
  collectionService = inject(CollectionService);
  characterService = inject(CharacterService);

  collections: ICollectionDto[] = [];
  collectionSorted: WritableSignal<ICollectionDto[]> = signal([]);
  type: string = '';

  constructor() {
    super();
    effect(() => {
      if (
        this.collectionService.collections()?.length > 0 &&
        this.characterService.characters()?.length > 0
      ) {
        this.collections = this.collectionService
          .collections()
          .map((collection) => {
            return {
              ...collection,
              character: this.characterService
                .characters()
                .find((character) => character.id === collection.id),
            };
          });
        this.collectionSorted.set(this.getSortCollections(this.type));
      }
    });
  }

  ngOnInitAfter(params: Params) {
    this.type = params['type'] ?? '';
    this.collectionSorted.set(this.getSortCollections(this.type));
  }

  getSortCollections(type: string) {
    return this.collections
      .filter(
        (collection) =>
          this.type === '' || collection.character?.rarity === type
      )
      .sort(
        (collection, collection2) =>
          collection.character?.powerstats.combat! -
          collection2.character?.powerstats.combat!
      );
  }
}
