import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  SettingsService,
  SharedService,
  SidebarService,
  LoginGuardsGuard,
  ProductService,
  UsuarioService,
  AutosService,
  CategoriasService
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
    LoginGuardsGuard,
    ProductService,
    UsuarioService,
    AutosService,
    CategoriasService
  ],
})
export class ServicesModule { }
