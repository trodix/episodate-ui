import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSerieDialogComponent } from './update-serie-dialog.component';

describe('UpdateSerieDialogComponent', () => {
  let component: UpdateSerieDialogComponent;
  let fixture: ComponentFixture<UpdateSerieDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSerieDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateSerieDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
