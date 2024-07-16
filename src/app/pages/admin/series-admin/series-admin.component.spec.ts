import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesAdminComponent } from './series-admin.component';

describe('SeriesAdminComponent', () => {
  let component: SeriesAdminComponent;
  let fixture: ComponentFixture<SeriesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeriesAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeriesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
