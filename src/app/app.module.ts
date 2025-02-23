import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { WeatherForecastComponent } from './shared/components/weather-forecast/weather-forecast.component';
import { FlatTypesComponent } from './features/master/components/flat-types/flat-types.component';
import { FlatsComponent } from './features/master/components/flats/flats.component';
import { DatePipe } from '@angular/common';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { CustomSidenavComponent } from './shared/components/custom-sidenav/custom-sidenav.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { NewOwnerComponent } from './features/resident/components/new-owner/new-owner.component'

@NgModule({
  declarations: [
    AppComponent,
    WeatherForecastComponent,
    FlatTypesComponent,
    FlatsComponent,
    CustomSidenavComponent,
    DashboardComponent,
    NewOwnerComponent
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
