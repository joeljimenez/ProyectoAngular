import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
   SettingsService,
   SharedService,
   SidebarService,
   LoginGuardsGuard
 } from './service.index';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    SettingsService,
     SharedService, 
     SidebarService,
     LoginGuardsGuard
  ],
})
export class ServicesModule { }
