import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '**', redirectTo: 'dashboard' },
  { path:'dashboard', loadChildren:  () => import('./crm/crm.module').then(m => m.CrmModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
