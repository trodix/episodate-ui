import {Component, Inject} from '@angular/core';
import {Serie} from "../../../models/serie";
import {SeriesService} from "../../../service/series.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-confirm-delete-serie-dialog',
  templateUrl: './confirm-delete-serie-dialog.component.html',
  styleUrls: ['./confirm-delete-serie-dialog.component.scss']
})
export class ConfirmDeleteSerieDialogComponent {

  constructor(
    private readonly seriesServices: SeriesService,
    private readonly dialogRef: MatDialogRef<ConfirmDeleteSerieDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public readonly data: Serie,
  ) {
  }

  delete() {
    this.seriesServices.deleteSerie(this.data.id).subscribe(() => {
      this.dialogRef.close();
    })
  }

}
