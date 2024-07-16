import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SeriesComponent} from "./pages/series/series.component";
import {SeriesAdminComponent} from "./pages/admin/series-admin/series-admin.component";
import {SerieDashboardAdminComponent} from "./pages/admin/serie-dashboard-admin/serie-dashboard-admin.component";

const routes: Routes = [
  { path: "", component: SeriesComponent },
  { path: "admin/series", component: SeriesAdminComponent },
  { path: "admin/series/:id", component: SerieDashboardAdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
