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

  show: boolean = false;

  title = 'dc-gacha';

  ngOnInit() {
    setTimeout(() => {
      this.show = true;
    }, 1000);
  }
}
