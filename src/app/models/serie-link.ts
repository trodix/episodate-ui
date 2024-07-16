import {Serie} from "./serie";

export interface SerieLink {
  id?: number;
  urlPattern: string;
  serie: Serie;
}
