import { ComponentFixture, TestBed } from '@angular/core/testing';
import { appConfigTest } from '../../app.component.spec';
import { CharacterShowComponent } from './character.show.component';

describe('CharacterShowComponent', () => {
  let component: CharacterShowComponent;
  let fixture: ComponentFixture<CharacterShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterShowComponent],
      providers: [...appConfigTest.providers],
    }).compileComponents();
    fixture = TestBed.createComponent(CharacterShowComponent);
    component = fixture.componentInstance;
  });

  it('should show the character', async () => {
    component.forceShow = true;
    fixture.whenStable();
    expect(component).toBeTruthy();
  });

  it('should show the character with forceShow to false', async () => {
    component.forceShow = false;
    fixture.whenStable();
    expect(component).toBeTruthy();
  });
});
