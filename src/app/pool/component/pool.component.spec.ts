import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DsvButtonComponent } from '@ng-vagabond-lab/ng-dsv/ds/button';
import { appConfigTest } from '../../app.component.spec';
import { PoolComponent } from './pool.component';

describe('PoolComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoolComponent, DsvButtonComponent],
      providers: [...appConfigTest.providers],
    }).compileComponents();
  });

  it('should create the app', async () => {
    const fixture = TestBed.createComponent(PoolComponent);
    const app = fixture.componentInstance;
    fixture.whenStable();
    expect(app).toBeTruthy();

    const buttonDebugElement = fixture.debugElement.query(
      By.directive(DsvButtonComponent)
    );
    const buttonComponent =
      buttonDebugElement.componentInstance as DsvButtonComponent;
    buttonComponent.callback.emit();
    fixture.whenStable();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    expect(app.poolService.characters().length).toBe(10);
  });
});
