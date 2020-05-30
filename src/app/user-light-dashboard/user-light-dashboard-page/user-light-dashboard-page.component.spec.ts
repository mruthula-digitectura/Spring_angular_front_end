import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLightDashboardPageComponent } from './user-light-dashboard-page.component';

describe('UserLightDashboardPageComponent', () => {
  let component: UserLightDashboardPageComponent;
  let fixture: ComponentFixture<UserLightDashboardPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLightDashboardPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLightDashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
