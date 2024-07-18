import {Component, Inject} from '@angular/core';
import {SeriesService} from "../../../service/series.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Serie} from "../../../models/serie";
import {Link} from "../../../models/link";

@Component({
  selector: 'app-confirm-delete-link-pattern-dialog',
  templateUrl: './confirm-delete-link-pattern-dialog.component.html',
  styleUrls: ['./confirm-delete-link-pattern-dialog.component.scss']
})
export class ConfirmDeleteLinkPatternDialogComponent {

  constructor(
    private readonly seriesServices: SeriesService,
    private readonly dialogRef: MatDialogRef<ConfirmDeleteLinkPatternDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public readonly data: { serie: Serie, linkPattern: Link },
  ) {
  }

  delete() {
    this.seriesServices.deleteLinkPattern(this.data.linkPattern.id).subscribe(() => {
      this.dialogRef.close();
    })
  }

}
