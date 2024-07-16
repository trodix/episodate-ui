import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SeriesService} from "../../../service/series.service";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-serie-dialog',
  templateUrl: './add-serie-dialog.component.html',
  styleUrls: ['./add-serie-dialog.component.scss']
})
export class AddSerieDialogComponent {

  createSerieForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });

  constructor(
    private readonly seriesServices: SeriesService,
    private readonly dialogRef: MatDialogRef<AddSerieDialogComponent>
  ) {
  }

  onSubmit() {
    this.seriesServices.createSerie({
      name: this.createSerieForm.get("name")?.value,
    }).subscribe(value => {
      this.createSerieForm.reset();
      this.dialogRef.close();
    })
  }

}
