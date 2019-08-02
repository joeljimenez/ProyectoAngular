import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { PrincipalComponent } from './principal/principal.component'; 
import { Grafica1Component } from './grafica1/grafica1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { IndexComponent } from './mantenimiento/index/index.component';
import { CrearProductoComponent } from './mantenimiento/crear-producto/crear-producto.component'
import { LoginGuardsGuard } from '../Service/service.index';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { IndexUserComponent } from './mantenimiento/index-user/index-user.component';
import { CreateUserComponent } from './mantenimiento/create-user/create-user.component';
import { CreateCategoriaComponent } from './mantenimiento/create-categoria/create-categoria.component';
import { IndexCategoriaComponent } from './mantenimiento/index-categoria/index-categoria.component';
import { ShowFotosComponent } from './mantenimiento/show-fotos/show-fotos.component';
import { AutosComponent } from './mantenimiento/autos/autos.component';
import { IndexAutosComponent } from './mantenimiento/index-autos/index-autos.component';

const pagesRoutes: Routes = [

  {
    path: '',
    component: PagesComponent,
    canActivate: [ LoginGuardsGuard ],
    children: [
        {path: 'Dashboard', component: PrincipalComponent}, 
        {path: 'Grafica/:id', component: Grafica1Component},
        {path: 'Account-Settings', component: AccountSettingsComponent},
        {path: 'index_productos', component: IndexComponent},
        {path: 'create_productos', component: CrearProductoComponent},
        {path: 'Perfil_usuario', component: PerfilUsuarioComponent},
        {path: 'Editar/:id', component: CrearProductoComponent},
        {path: 'usuarios', component: IndexUserComponent},
        {path: 'create_user', component: CreateUserComponent},
        {path: 'Editar/Usuario/:id', component: CreateUserComponent},
        {path: 'categorias', component: IndexCategoriaComponent},
        {path: 'categorias/:id', component: CreateCategoriaComponent},
        {path: 'categorias_crear', component: CreateCategoriaComponent}, 
        {path: 'ver_fotos/:id', component: ShowFotosComponent},
        {path: 'autos', component: IndexAutosComponent},
        {path: 'autos/ver/:id', component: AutosComponent},
        {path: 'crear_autos', component: AutosComponent},
        {path: '', redirectTo: '/Dashboard', pathMatch: 'full'}
    ]

  }

];
// se usa forchild porque son las rutas secundarias
//  y forroot cuando son rutas principales
export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
