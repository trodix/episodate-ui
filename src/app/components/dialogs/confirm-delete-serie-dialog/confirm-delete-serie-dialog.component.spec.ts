import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDeleteSerieDialogComponent } from './confirm-delete-serie-dialog.component';

describe('ConfirmDeleteSerieDialogComponent', () => {
  let component: ConfirmDeleteSerieDialogComponent;
  let fixture: ComponentFixture<ConfirmDeleteSerieDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmDeleteSerieDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmDeleteSerieDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
