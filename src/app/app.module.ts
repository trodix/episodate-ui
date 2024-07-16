import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AuthConfigModule} from "../config/auth.config.module";
import { SeriesComponent } from './pages/series/series.component';
import {HttpClientModule} from "@angular/common/http";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from '@angular/material/icon';
import { SeriesAdminComponent } from './pages/admin/series-admin/series-admin.component';
import { HeaderComponent } from './components/header/header.component';
import { SerieDashboardAdminComponent } from './pages/admin/serie-dashboard-admin/serie-dashboard-admin.component';
import { AddSerieDialogComponent } from './components/dialogs/add-serie-dialog/add-serie-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    SeriesComponent,
    SeriesAdminComponent,
    HeaderComponent,
    SerieDashboardAdminComponent,
    AddSerieDialogComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        AuthConfigModule,
        HttpClientModule,
        MatAutocompleteModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        FormsModule,
        MatDialogModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
