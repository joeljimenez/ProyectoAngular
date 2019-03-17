import { Grafica1Component } from './grafica1/grafica1.component';
import { PrincipalComponent } from './principal/principal.component';
import { NgModule } from '@angular/core';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { SharedModel } from '../Shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { FormsModule } from '@angular/forms';


// temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';




@NgModule({
  declarations : [
    PrincipalComponent ,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    IncrementadorComponent

  ],
  exports : [
    PrincipalComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
  ],
  imports : [
    SharedModel,
    PAGES_ROUTES,
    FormsModule
  ]

})
export class PagesModule { }

