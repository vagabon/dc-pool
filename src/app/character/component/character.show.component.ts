import { CommonModule } from '@angular/common';
import { Component, Input, signal, WritableSignal } from '@angular/core';
import { ICharacterDto } from '../dto/character.dto';

const ANIMATION_WAITING = 500;

@Component({
  selector: 'app-character-show',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './character.show.component.html',
  styleUrl: './character.show.component.scss',
})
export class CharacterShowComponent {
  @Input() character?: ICharacterDto;
  @Input() small: boolean = false;
  @Input() forceShow: boolean = false;

  show: WritableSignal<boolean> = signal(false);

  ngOnInit() {
    if (this.forceShow) {
      this.show.set(true);
    } else {
      setTimeout(() => {
        this.show.set(true);
      }, ANIMATION_WAITING);
    }
  }
}
