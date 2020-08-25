import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

//Routes
import { CrmRoutingModule } from './crm-routing.module';
import { CrmComponent } from './crm.component';
import { BarContactsComponent } from './components/bar-contacts/bar-contacts.component';




@NgModule({
  declarations: [HeaderComponent, SidebarComponent, CrmComponent, BarContactsComponent],
  imports: [
    CommonModule,
    CrmRoutingModule
  ]
})
export class CrmModule { }
