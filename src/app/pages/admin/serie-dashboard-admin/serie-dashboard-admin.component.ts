import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SeriesService} from "../../../service/series.service";
import {Serie} from "../../../models/serie";
import {
  UpdateSerieDialogComponent
} from "../../../components/dialogs/update-serie-dialog/update-serie-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {
  ConfirmDeleteSerieDialogComponent
} from "../../../components/dialogs/confirm-delete-serie-dialog/confirm-delete-serie-dialog.component";
import {
  AddLinkPatternDialogComponent
} from "../../../components/dialogs/add-link-pattern-dialog/add-link-pattern-dialog.component";
import {
  ConfirmDeleteLinkPatternDialogComponent
} from "../../../components/dialogs/confirm-delete-link-pattern-dialog/confirm-delete-link-pattern-dialog.component";
import {Link} from "../../../models/link";

@Component({
  selector: 'app-serie-dashboard-admin',
  templateUrl: './serie-dashboard-admin.component.html',
  styleUrls: ['./serie-dashboard-admin.component.scss']
})
export class SerieDashboardAdminComponent implements OnInit {

  serie: Serie | undefined;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly seriesService: SeriesService,
    private readonly dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.init();
  }

  init() {
    const serieId = this.route.snapshot.params['id'];
    this.seriesService.getById(serieId).subscribe(serie => {
      this.serie = serie;
    });
  }

  openUpdateSerieDialog() {
    const dialogRef = this.dialog.open(UpdateSerieDialogComponent, {
      data: this.serie
    });

    dialogRef.afterClosed().subscribe(_ => {
      this.init();
    });
  }

  openConfirmDeleteSerieDialog() {
    const dialogRef = this.dialog.open(ConfirmDeleteSerieDialogComponent, {
      data: this.serie
    });

    dialogRef.afterClosed().subscribe(_ => {
      this.router.navigateByUrl("/admin/series");
    });
  }

  openAddLinkPatternDialog() {
    const dialogRef = this.dialog.open(AddLinkPatternDialogComponent, {
      data: this.serie
    });

    dialogRef.afterClosed().subscribe(_ => {
      this.init();
    });
  }

  openConfirmDeleteLinkPatternDialog(selectedLink: Link) {
    const dialogRef = this.dialog.open(ConfirmDeleteLinkPatternDialogComponent, {
      data: {
        serie: this.serie,
        linkPattern: selectedLink
      }
    });

    dialogRef.afterClosed().subscribe(_ => {
      this.init();
    });
  }

  updateSerie() {
    this.openUpdateSerieDialog();
  }

  deleteSerie() {
    this.openConfirmDeleteSerieDialog();
  }

}
