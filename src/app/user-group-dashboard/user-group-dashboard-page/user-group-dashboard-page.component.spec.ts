import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGroupDashboardPageComponent } from './user-group-dashboard-page.component';

describe('UserGroupDashboardPageComponent', () => {
  let component: UserGroupDashboardPageComponent;
  let fixture: ComponentFixture<UserGroupDashboardPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserGroupDashboardPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGroupDashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
