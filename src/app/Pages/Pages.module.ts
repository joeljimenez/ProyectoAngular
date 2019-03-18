import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';


import { Grafica1Component } from './grafica1/grafica1.component';
import { PrincipalComponent } from './principal/principal.component';

import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { SharedModel } from '../Shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { GraficaDonaComponent } from '../components/grafica-dona/grafica-dona.component';



// temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';




@NgModule({
  declarations : [
    PrincipalComponent ,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    IncrementadorComponent,
    GraficaDonaComponent,

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
    FormsModule,
    ChartsModule, 
    CommonModule,
  ]

})
export class PagesModule { }

