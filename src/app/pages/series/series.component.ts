import {Component, OnInit} from '@angular/core';
import {SeriesService} from "../../service/series.service";
import {Observable} from "rxjs";
import {Serie} from "../../models/serie";
import {FormControl, FormGroup, RequiredValidator, Validators} from "@angular/forms";
import {SerieLinkData} from "../../models/serie-link-data";

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {

  series$: Observable<Serie[]> = new Observable<Serie[]>();
  serieLinkData$: Observable<SerieLinkData> = new Observable<SerieLinkData>();

  searchForm: FormGroup = new FormGroup({
    serieName: new FormControl('', [Validators.required]),
    season: new FormControl(1, [Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
    episode: new FormControl(1, [Validators.required, Validators.minLength(1), Validators.maxLength(10000)]),
  });

  constructor(
    private readonly seriesServices: SeriesService
  ) {}

  ngOnInit(): void {
    this.series$ = this.seriesServices.getAll();
  }

  onSubmit() {
    this.serieLinkData$ = this.seriesServices.findEpisodeLinks(
      this.searchForm.get("serieName")?.value,
      this.searchForm.get("season")?.value,
      this.searchForm.get("episode")?.value
    );
  }

}
