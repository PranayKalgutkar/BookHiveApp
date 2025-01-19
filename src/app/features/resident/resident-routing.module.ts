import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewOwnerComponent } from '../resident/components/new-owner/new-owner.component'

const routes: Routes = [
  {
    path: 'owner/new', component: NewOwnerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResidentRoutingModule { }
