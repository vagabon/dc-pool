import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CharacterService } from '../../../character/service/character.service';
import { RARITIES } from '../../../character/utils/character.utils';
import { ICollectionDto } from '../../dto/collection.dto';

@Component({
  selector: 'app-collection-filter',
  imports: [CommonModule, RouterModule],
  standalone: true,
  templateUrl: './collection.filters.component.html',
  styleUrl: './collection.filters.component.scss',
})
export class CollectionFiltersComponent {
  characterService = inject(CharacterService);

  @Input() collections: ICollectionDto[] = [];
  @Input() type: string = '';

  rarities = RARITIES;

  getNbRarity(rarity: string) {
    return this.collections.filter(
      (collection) => collection.character?.rarity === rarity
    ).length;
  }
}
