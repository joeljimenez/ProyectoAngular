import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Service/Login/login.service';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario.models';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _service: LoginService , private _router:Router) { }

  ngOnInit() {
  }
 public email;
 public password;

  public res : any = {
    exito :  '',
    token:'', 
    usuario:'',
  }

  mensaje_error:string  = "";
  error = true;


  login() {
    let usuario =  new Usuario(null , this.email , this.password);
    
    this._service.Login(usuario).subscribe((data) => {
        this.res = data;  
       
        this.error = this.res.exito;
      if(this.res.exito){

        if(this.res.usuario.role == 'ADMIN_ROLE'){
       localStorage.setItem('id', this.res.usuario._id);
       localStorage.setItem('nombre', this.res.usuario.nombre);
       localStorage.setItem('token', this.res.token);

          this._router.navigate(['/Dashboard']);
        }else{
          this.error = false;
          this.mensaje_error= 'no tiene permiso para entrar al sistema';
        }
      
      }else{

        this.mensaje_error  = this.res.err.message;
        setTimeout(() => {
          this.error = true;
        }, 4000);
       

      }
    });
  }

}
