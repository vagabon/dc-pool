import { provideHttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { appConfig } from '../../app.config';
import { CollectionComponent } from './collection.component';

describe('CollectionComponent', () => {
  beforeEach(async () => {
    localStorage.setItem(
      'collections',
      JSON.stringify([[{ id: 1, nb: 1, star: 0, power: 0 }]])
    );
    await TestBed.configureTestingModule({
      imports: [CollectionComponent],
      providers: [provideHttpClient(), ...appConfig.providers],
    }).compileComponents();
  });

  it('should create the app', async () => {
    const fixture = TestBed.createComponent(CollectionComponent);
    const app = fixture.componentInstance;
    app.characterService.load();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    fixture.detectChanges();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    expect(app).toBeTruthy();
  });
});
