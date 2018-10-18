import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
// import { NoPageComponent } from './Shared/no-page/no-page.component';
// import { HeaderComponent } from './Shared/header/header.component';
// import { SidebarComponent } from './Shared/sidebar/sidebar.component';
// import { NavegacionComponent } from './Shared/navegacion/navegacion.component';
import { APP_ROUTES } from './app.router';
// import { PagesComponent } from './Pages/pages.component';
import { RegistrarComponent } from './login/registrar.component';
// import { RegistrarComponent } from './login/registers.component';
// modulis
import { PagesModule } from './Pages/Pages.module';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrarComponent,
    // NoPageComponent,
    // HeaderComponent,
    // SidebarComponent,
    // NavegacionComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
