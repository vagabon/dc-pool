import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { appConfigTest } from '../../app.component.spec';
import { PoolComponent } from './pool.component';

describe('PoolComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoolComponent],
      providers: [...appConfigTest.providers],
    }).compileComponents();
  });

  it('should create the app', async () => {
    const fixture = TestBed.createComponent(PoolComponent);
    const app = fixture.componentInstance;
    fixture.whenStable();
    expect(app).toBeTruthy();
    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    button.click();
    fixture.whenStable();
    await new Promise((resolve) => setTimeout(resolve, 2000));
  });
});
