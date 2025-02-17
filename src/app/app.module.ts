import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/navigation/header/header.component';
import { BodyComponent } from './core/navigation/body/body.component';
import { SidenavComponent } from './core/navigation/sidenav/sidenav.component';
import { SublevelMenuComponent } from './core/navigation/sidenav/sublevel-menu.component';
import { WeatherForecastComponent } from './shared/components/weather-forecast/weather-forecast.component';
import { FlatTypesComponent } from './features/master/components/flat-types/flat-types.component';
import { FlatsComponent } from './features/master/components/flats/flats.component';
import { NewOwnerComponent  } from './features/resident/components/new-owner/new-owner.component';
import { DatePipe } from '@angular/common';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { AppMatTabSecondaryInfoComponent } from './shared/components/app-mat-tab-secondary-info/app-mat-tab-secondary-info.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    SidenavComponent,
    SublevelMenuComponent,
    WeatherForecastComponent,
    FlatTypesComponent,
    FlatsComponent,
    NewOwnerComponent,
    AppMatTabSecondaryInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [
    DatePipe,
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue:
        { appearance: 'outline' }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
