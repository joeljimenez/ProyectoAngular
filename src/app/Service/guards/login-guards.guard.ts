import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../../Service/Login/login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardsGuard implements CanActivate {
  constructor( public _servuiceLogin:LoginService , private _route:Router){

  }
  canActivate(){
     if (this._servuiceLogin.estaLogueado()) {
   
       console.log("Iniciando por el guards");
       return true;
     } else {
       console.log("bloqueado por el guards");
       this._route.navigate(['/Session']);
       return false; 
     }
 
  }
}
