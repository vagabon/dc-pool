import { provideHttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { By, provideClientHydration } from '@angular/platform-browser';
import { PoolComponent } from './pool.component';

describe('PoolComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoolComponent],
      providers: [provideHttpClient(), provideClientHydration()],
    }).compileComponents();
  });

  it('should create the app', async () => {
    const fixture = TestBed.createComponent(PoolComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    expect(app).toBeTruthy();
    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    button.click();
    fixture.detectChanges();
    await new Promise((resolve) => setTimeout(resolve, 2000));
  });
});
