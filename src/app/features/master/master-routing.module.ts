import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlatTypesComponent } from '../master/components/flat-types/flat-types.component';
import { FlatsComponent } from '../master/components/flats/flats.component';

const routes: Routes = [
  {
    path: 'flattypes', component: FlatTypesComponent
  },
  {
    path: 'flats', component: FlatsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
