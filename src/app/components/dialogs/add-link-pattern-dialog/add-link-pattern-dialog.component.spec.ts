import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLinkPatternDialogComponent } from './add-link-pattern-dialog.component';

describe('AddLinkPatternDialogComponent', () => {
  let component: AddLinkPatternDialogComponent;
  let fixture: ComponentFixture<AddLinkPatternDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLinkPatternDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLinkPatternDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
