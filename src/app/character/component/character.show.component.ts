import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ICharacterDto } from '../dto/character.dto';

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

  show: boolean = false;

  title = 'dc-gacha';

  ngOnInit() {
    if (this.forceShow) {
      this.show = true;
    } else {
      setTimeout(() => {
        this.show = true;
      }, 1000);
    }
  }
}
