import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSerieDialogComponent } from './add-serie-dialog.component';

describe('AddSerieDialogComponent', () => {
  let component: AddSerieDialogComponent;
  let fixture: ComponentFixture<AddSerieDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSerieDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSerieDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
