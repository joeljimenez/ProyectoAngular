import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';


import { Grafica1Component } from './grafica1/grafica1.component';
import { PrincipalComponent } from './principal/principal.component'; 
import { PagesComponent } from './pages.component';
import { SharedModel } from '../Shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { GraficaDonaComponent } from '../components/grafica-dona/grafica-dona.component';



// temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { CrearProductoComponent } from './mantenimiento/crear-producto/crear-producto.component';
import { IndexComponent } from './mantenimiento/index/index.component';
import { IndexUserComponent } from './mantenimiento/index-user/index-user.component';
import { CreateUserComponent } from './mantenimiento/create-user/create-user.component';
import { IndexCategoriaComponent } from './mantenimiento/index-categoria/index-categoria.component';
import { CreateCategoriaComponent } from './mantenimiento/create-categoria/create-categoria.component';
import { ShowFotosComponent } from './mantenimiento/show-fotos/show-fotos.component';




@NgModule({
  declarations : [
    PrincipalComponent , 
    Grafica1Component,
    PagesComponent,
    IncrementadorComponent,
    GraficaDonaComponent,
    AccountSettingsComponent,
    PerfilUsuarioComponent,
    CrearProductoComponent,
    IndexComponent,
    IndexUserComponent,
    CreateUserComponent,
    IndexCategoriaComponent,
    CreateCategoriaComponent,
    ShowFotosComponent,

  ],
  exports : [
    PrincipalComponent, 
    Grafica1Component,
    PagesComponent,
  ],
  imports : [
    SharedModel,
    PAGES_ROUTES,
    FormsModule,
    ChartsModule, 
    CommonModule,
  ]

})
export class PagesModule { }

