import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Route, Router} from "@angular/router";
import {SeriesService} from "../../../service/series.service";
import {Serie} from "../../../models/serie";
import {Observable} from "rxjs";

@Component({
  selector: 'app-serie-dashboard-admin',
  templateUrl: './serie-dashboard-admin.component.html',
  styleUrls: ['./serie-dashboard-admin.component.scss']
})
export class SerieDashboardAdminComponent implements OnInit {

  serie: Serie | undefined;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly seriesService: SeriesService
  ) {
  }

  ngOnInit(): void {
    const serieId = this.route.snapshot.params['id'];
    this.seriesService.getById(serieId).subscribe(serie => {
      this.serie = serie;
    });
  }

}
