import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { CharacterShowComponent } from '../../character/component/character.show.component';
import { ICharacterDto } from '../../character/dto/character.dto';
import { PoolService } from '../service/pool.service';

@Component({
  selector: 'app-pool',
  imports: [CommonModule, CharacterShowComponent],
  standalone: true,
  templateUrl: './pool.component.html',
  styleUrl: './pool.component.scss',
})
export class PoolComponent {
  poolService = inject(PoolService);

  characters: ICharacterDto[] = [];

  isPooling = false;

  constructor() {
    effect(() => {
      this.characters = this.poolService.characters();
    });
  }

  doPool() {
    this.isPooling = true;
    setTimeout(() => {
      this.poolService.doPool();
    }, 100);
    setTimeout(() => {
      this.isPooling = false;
    }, 1500);
  }
}
