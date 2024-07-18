import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDeleteLinkPatternDialogComponent } from './confirm-delete-link-pattern-dialog.component';

describe('ConfirmDeleteLinkPatternDialogComponent', () => {
  let component: ConfirmDeleteLinkPatternDialogComponent;
  let fixture: ComponentFixture<ConfirmDeleteLinkPatternDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmDeleteLinkPatternDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmDeleteLinkPatternDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
