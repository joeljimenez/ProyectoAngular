import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { PrincipalComponent } from './principal/principal.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { CrearProductoComponent } from './mantenimiento/crear-producto/crear-producto.component';
import { LoginGuardsGuard } from '../Service/service.index';
const pagesRoutes: Routes = [

  {
    path: '',
    component: PagesComponent,
    canActivate: [ LoginGuardsGuard ],
    children: [
        {path: 'Dashboard', component: PrincipalComponent},
        {path: 'Progress', component: ProgressComponent},
        {path: 'Grafica', component: Grafica1Component},
        {path: 'Account-Settings', component: AccountSettingsComponent},
        {path: 'create_productos', component: CrearProductoComponent},
        {path: '', redirectTo: '/Dashboard', pathMatch: 'full'}
    ]

  }

];
// se usa forchild porque son las rutas secundarias
//  y forroot cuando son rutas principales
export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
