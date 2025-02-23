import { Component, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DsvThemeComponent } from '@ng-vagabond-lab/ng-dsv/ds/theme';
import { CharacterService } from './character/service/character.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, DsvThemeComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  characterService = inject(CharacterService);

  theme = {
    primary: 'rgb(255, 140, 0)',
  };
}
