import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule} from '@angular/common';
import { HeaderComponent } from '../Shared/header/header.component';
import { NavegacionComponent } from '../Shared/navegacion/navegacion.component';
import { NoPageComponent } from '../Shared/no-page/no-page.component';
import { SidebarComponent } from '../Shared/sidebar/sidebar.component';


@NgModule({
imports: [
  RouterModule,
  CommonModule
],
declarations : [
  HeaderComponent,
  NavegacionComponent,
  NoPageComponent,
  SidebarComponent
], 
exports : [
  HeaderComponent,
  NavegacionComponent,
  NoPageComponent,
  SidebarComponent
]

})
export class SharedModel { }
