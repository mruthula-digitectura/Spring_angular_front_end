import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightDisplayPageComponent } from './light-dashboard-page.component';

describe('LightDisplayPageComponent', () => {
  let component: LightDisplayPageComponent;
  let fixture: ComponentFixture<LightDisplayPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightDisplayPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightDisplayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
