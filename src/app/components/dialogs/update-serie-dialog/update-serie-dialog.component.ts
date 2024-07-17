import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SeriesService} from "../../../service/series.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Serie} from "../../../models/serie";
import {UpdateSerie} from "../../../models/update-serie";

@Component({
  selector: 'app-update-serie-dialog',
  templateUrl: './update-serie-dialog.component.html',
  styleUrls: ['./update-serie-dialog.component.scss']
})
export class UpdateSerieDialogComponent implements OnInit {

  serie: UpdateSerie | undefined;

  updateSerieForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });

  constructor(
    private readonly seriesServices: SeriesService,
    private readonly dialogRef: MatDialogRef<UpdateSerieDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public readonly data: Serie,
  ) {
  }

  ngOnInit(): void {
    this.serie = {
      id: this.data.id,
      name: this.data.name,
    }
    this.updateSerieForm.get('name')?.setValue(this.serie.name);
  }

  onSubmit() {
    this.seriesServices.updateSerie({
      id: this.data.id,
      name: this.updateSerieForm.get("name")?.value,
    }).subscribe(value => {
      this.updateSerieForm.reset();
      this.dialogRef.close();
    })
  }

}
