import {Component, Inject, OnInit} from '@angular/core';
import {SeriesService} from "../../../service/series.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {UpdateSerie} from "../../../models/update-serie";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Serie} from "../../../models/serie";

@Component({
  selector: 'app-add-link-pattern-dialog',
  templateUrl: './add-link-pattern-dialog.component.html',
  styleUrls: ['./add-link-pattern-dialog.component.scss']
})
export class AddLinkPatternDialogComponent implements OnInit {

  serie: UpdateSerie | undefined;

  addLinkPatternForm: FormGroup = new FormGroup({
    urlPattern: new FormControl('', [Validators.required]),
  });

  constructor(
    private readonly seriesService: SeriesService,
    private readonly dialogRef: MatDialogRef<AddLinkPatternDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public readonly data: Serie,
  ) {
  }

  ngOnInit(): void {
    this.serie = {
      id: this.data.id,
      name: this.data.name,
    }
  }

  onSubmit() {
    this.seriesService.createLinkPattern({
      serieId: this.serie!.id,
      urlPattern: this.addLinkPatternForm.get("urlPattern")?.value
    }).subscribe(() => {
      this.addLinkPatternForm.reset();
      this.dialogRef.close();
    });
  }

}
