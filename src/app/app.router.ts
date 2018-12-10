// import { RegistrarComponent } from './login/registers.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NoPageComponent } from './Shared/no-page/no-page.component';
import { RegistrarComponent } from './login/registrar.component';

const appRouter: Routes = [
{path: 'Session', component: LoginComponent},
{path: 'Registro', component: RegistrarComponent},
{path: '**', component: NoPageComponent}
];

export const APP_ROUTES = RouterModule.forRoot(appRouter, { useHash: true });
