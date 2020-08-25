import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrmComponent } from './crm.component';

const routes: Routes = [
    {path: '', component: CrmComponent, 
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadChildren:  () => import('../home/home.module').then(m => m.HomeModule)}
    ]
    
  }
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrmRoutingModule { }
