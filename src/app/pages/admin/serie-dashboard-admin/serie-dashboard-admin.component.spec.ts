import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieDashboardAdminComponent } from './serie-dashboard-admin.component';

describe('SerieDashboardAdminComponent', () => {
  let component: SerieDashboardAdminComponent;
  let fixture: ComponentFixture<SerieDashboardAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerieDashboardAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerieDashboardAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
