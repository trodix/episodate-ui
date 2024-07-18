import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {SerieLinkData} from "../models/serie-link-data";
import {Serie} from "../models/serie";
import {CreateSerie} from "../models/create-serie";
import {UpdateSerie} from "../models/update-serie";
import {CreateLinkPattern} from "../models/create-link-pattern";
import {Link} from "../models/link";

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor(private readonly httpClient: HttpClient ) { }

  getAll(): Observable<Serie[]> {
    return this.httpClient.get<Serie[]>(`${environment.BACKEND_BASE_URL}/public/series`);
  }

  getById(id: string): Observable<Serie> {
    return this.httpClient.get<Serie>(`${environment.BACKEND_BASE_URL}/admin/series/${id}/link-patterns`);
  }

  findEpisodeLinks(serieName: string, season: number, episode: number): Observable<SerieLinkData> {
    return this.httpClient.get<SerieLinkData>(`${environment.BACKEND_BASE_URL}/public/series/search?serieName=${serieName}&season=${season}&episode=${episode}`);
  }

  createSerie(serie: CreateSerie): Observable<Serie> {
    return this.httpClient.post<Serie>(`${environment.BACKEND_BASE_URL}/admin/series`, serie);
  }

  updateSerie(serie: UpdateSerie): Observable<void> {
    return this.httpClient.put<void>(`${environment.BACKEND_BASE_URL}/admin/series`, serie);
  }

  deleteSerie(serieId: number): Observable<void> {
    return this.httpClient.delete<void>(`${environment.BACKEND_BASE_URL}/admin/series/${serieId}`);
  }

  createLinkPattern(createLink: CreateLinkPattern) {
    return this.httpClient.post<Link>(`${environment.BACKEND_BASE_URL}/admin/links`, createLink);
  }

  deleteLinkPattern(linkId: number) {
    return this.httpClient.delete<Link>(`${environment.BACKEND_BASE_URL}/admin/links/${linkId}`);
  }

}
