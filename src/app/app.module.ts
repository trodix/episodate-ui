import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AuthConfigModule} from "../config/auth.config.module";
import { SeriesComponent } from './pages/series/series.component';
import {HttpClientModule} from "@angular/common/http";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    SeriesComponent
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
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
