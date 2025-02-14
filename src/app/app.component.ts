import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharacterService } from './character/service/character.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  characterService = inject(CharacterService);

  title = 'dc-gacha';
}
