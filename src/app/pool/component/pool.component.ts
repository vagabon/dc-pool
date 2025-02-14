import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CharacterShowComponent } from '../../character/component/character.show.component';
import { ICharacterDto } from '../../character/dto/character.dto';
import { CharacterService } from '../../character/service/character.service';

@Component({
  selector: 'app-pool',
  imports: [CommonModule, CharacterShowComponent],
  standalone: true,
  templateUrl: './pool.component.html',
  styleUrl: './pool.component.scss',
})
export class PoolComponent {
  characterService = inject(CharacterService);

  characters: ICharacterDto[] = [];

  doPool() {
    this.characters = this.characterService.pool();
  }
}
