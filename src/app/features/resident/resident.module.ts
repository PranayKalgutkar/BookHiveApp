import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResidentRoutingModule } from './resident-routing.module';
//import { NewOwnerComponent } from './components/new-owner/new-owner.component';

@NgModule({
  declarations: [
    //NewOwnerComponent
  ],
  imports: [
    CommonModule,
    ResidentRoutingModule
  ]
})
export class ResidentModule { }
