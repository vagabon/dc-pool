import { provideHttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideClientHydration } from '@angular/platform-browser';
import { CharacterShowComponent } from './character.show.component';

describe('CharacterShowComponent', () => {
  let component: CharacterShowComponent;
  let fixture: ComponentFixture<CharacterShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterShowComponent],
      providers: [provideHttpClient(), provideClientHydration()],
    }).compileComponents();
    fixture = TestBed.createComponent(CharacterShowComponent);
    component = fixture.componentInstance;
  });

  it('should show the character', async () => {
    component.forceShow = true;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should show the character with forceShow to false', async () => {
    component.forceShow = false;
    fixture.detectChanges();
    await new Promise((resolve) => setTimeout(resolve, 1000));
  });
});
