import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, effect, inject } from '@angular/core';
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
  cdr = inject(ChangeDetectorRef);

  characters: ICharacterDto[] = [];

  isPooling = false;

  constructor() {
    effect(() => {
      this.characters = this.poolService.characters();
      this.cdr?.detectChanges();
    });
  }

  doPool() {
    this.isPooling = true;
    this.poolService.doPool();
    this.cdr?.detectChanges();
    setTimeout(() => {
      this.isPooling = false;
      this.cdr?.detectChanges();
    }, 1500);
  }
}
