import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoThemeComponent } from './two-theme.component';

describe('TwoThemeComponent', () => {
  let component: TwoThemeComponent;
  let fixture: ComponentFixture<TwoThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoThemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
