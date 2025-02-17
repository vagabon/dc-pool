import { TestBed } from '@angular/core/testing';
import { appConfigTest } from '../../app.component.spec';
import { CollectionComponent } from './collection.component';

describe('CollectionComponent', () => {
  beforeEach(async () => {
    localStorage.setItem(
      'collections',
      JSON.stringify([[{ id: 1, nb: 1, star: 0, power: 0 }]])
    );
    await TestBed.configureTestingModule({
      imports: [CollectionComponent],
      providers: [...appConfigTest.providers],
    }).compileComponents();
  });

  it('should create the app', async () => {
    const fixture = TestBed.createComponent(CollectionComponent);
    const app = fixture.componentInstance;
    app.characterService.load();
    fixture.whenStable();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    expect(app).toBeTruthy();
  });
});
