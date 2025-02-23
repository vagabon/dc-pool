import { CommonModule } from '@angular/common';
import {
  Component,
  effect,
  inject,
  signal,
  WritableSignal,
} from '@angular/core';
import { DsvButtonComponent } from '@ng-vagabond-lab/ng-dsv/ds/button';
import { CharacterShowComponent } from '../../character/component/character.show.component';
import { ICharacterDto } from '../../character/dto/character.dto';
import { PoolService } from '../service/pool.service';

const WAITING_BETWEEN_POOL = 1500;

@Component({
  selector: 'app-pool',
  imports: [CommonModule, CharacterShowComponent, DsvButtonComponent],
  standalone: true,
  templateUrl: './pool.component.html',
  styleUrl: './pool.component.scss',
})
export class PoolComponent {
  poolService = inject(PoolService);

  characters: ICharacterDto[] = [];

  isPooling: WritableSignal<boolean> = signal(false);

  constructor() {
    effect(() => {
      this.characters = this.poolService.characters();
    });
  }

  doPool(): void {
    this.isPooling.set(true);
    this.poolService.doPool();
    setTimeout(() => {
      this.isPooling.set(false);
    }, WAITING_BETWEEN_POOL);
  }
}
