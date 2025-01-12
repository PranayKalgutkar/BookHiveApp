import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [],
  exports:[
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule
  ]
  // imports: [
  //   CommonModule
  // ]
})
export class MaterialModule { }
