// import { RegistrarComponent } from './login/registers.component';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './Pages/principal/principal.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './Pages/progress/progress.component';
import { Grafica1Component } from './Pages/grafica1/grafica1.component';
import { NoPageComponent } from './Shared/no-page/no-page.component';
import { PagesComponent } from './Pages/pages.component';
import { RegistrarComponent } from './login/registrar.component';

const appRouter: Routes = [
{path: '', component: PagesComponent, children: [
      {path: 'Inicio', component: PrincipalComponent},
      {path: 'Progress', component: ProgressComponent},
      {path: 'Grafica', component: Grafica1Component},
      {path: '', redirectTo: '/Inicio', pathMatch: 'full'},

     ]
},

{path: 'Session', component: LoginComponent},
{path: 'Registro', component: RegistrarComponent},
{path: '**', component: NoPageComponent}
];

export const APP_ROUTES = RouterModule.forRoot(appRouter, { useHash: true });
