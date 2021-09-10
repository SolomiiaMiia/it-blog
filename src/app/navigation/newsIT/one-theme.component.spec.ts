import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneThemeComponent } from './one-theme.component';

describe('OneThemeComponent', () => {
  let component: OneThemeComponent;
  let fixture: ComponentFixture<OneThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneThemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
