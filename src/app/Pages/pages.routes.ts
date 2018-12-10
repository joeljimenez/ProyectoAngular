import { RouterModule,Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { PrincipalComponent } from './principal/principal.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
const pagesRoutes:Routes =[

  {
  	path:'',
  	component:PagesComponent,
  	children:[
        {path:'Dashboard',component:PrincipalComponent},
        {path:'Progress', component:ProgressComponent},
        {path:'Grafica',component:Grafica1Component},
        {path:'',redirectTo:'/Dashboard', pathMatch: 'full'}
  	]

  }

];
// se usa forchild porque son las rutas secundarias
//  y forroot cuando son rutas principales
export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);