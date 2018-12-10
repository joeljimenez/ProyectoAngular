import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component'; 
import { APP_ROUTES } from './app.router'; 
import { RegistrarComponent } from './login/registrar.component'; 
import { PagesModule } from './Pages/Pages.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrarComponent,
 
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
