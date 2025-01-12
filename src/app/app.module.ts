import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/navigation/header/header.component';
import { BodyComponent } from './core/navigation/body/body.component';
import { SidenavComponent } from './core/navigation/sidenav/sidenav.component';
import { SublevelMenuComponent } from './core/navigation/sidenav/sublevel-menu.component';
import { WeatherForecastComponent } from './shared/components/weather-forecast/weather-forecast.component';
import { FlatTypesComponent } from './features/master/components/flat-types/flat-types.component';
import {FlatsComponent } from './features/master/components/flats/flats.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    SidenavComponent,
    SublevelMenuComponent,
    WeatherForecastComponent,
    FlatTypesComponent,
    FlatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
