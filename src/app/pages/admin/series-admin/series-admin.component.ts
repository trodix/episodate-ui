import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Serie} from "../../../models/serie";
import {SeriesService} from "../../../service/series.service";
import {MatDialog} from "@angular/material/dialog";
import {AddSerieDialogComponent} from "../../../components/dialogs/add-serie-dialog/add-serie-dialog.component";

@Component({
  selector: 'app-series-admin',
  templateUrl: './series-admin.component.html',
  styleUrls: ['./series-admin.component.scss']
})
export class SeriesAdminComponent implements OnInit {

  series$: Observable<Serie[]> = new Observable<Serie[]>();

  constructor(
    private readonly seriesServices: SeriesService,
    private readonly dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadSeries();
  }

  private loadSeries() {
    this.series$ = this.seriesServices.getAll();
  }

  openAddSerieDialog() {
    const dialogRef = this.dialog.open(AddSerieDialogComponent, {
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(_ => {
      this.loadSeries();
    })
  }

}
