import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NoPageComponent } from './Shared/no-page/no-page.component';
import { PrincipalComponent } from './Pages/principal/principal.component';
import { ProgressComponent } from './Pages/progress/progress.component';
import { HeaderComponent } from './Shared/header/header.component';
import { Grafica1Component } from './Pages/grafica1/grafica1.component';
import { SidebarComponent } from './Shared/sidebar/sidebar.component';
import { NavegacionComponent } from './Shared/navegacion/navegacion.component';
import { SidebarService } from './Service/sidebar.service';
import { SharedService } from './Service/shared.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NoPageComponent,
    PrincipalComponent,
    ProgressComponent,
    HeaderComponent,
    Grafica1Component,
    SidebarComponent,
    NavegacionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
