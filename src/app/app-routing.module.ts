import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'feature/master',
    loadChildren: () => import('./features/master/master.module')
        .then(m => m.MasterModule)
},
{
  path: 'resident',
  loadChildren: () => import('./features/resident/resident.module')
      .then(m => m.ResidentModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
