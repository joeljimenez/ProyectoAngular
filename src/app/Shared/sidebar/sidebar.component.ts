import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../Service/service.index';
import { LoginService } from 'src/app/Service/Login/login.service';
import { UsuarioService } from 'src/app/Service/Usuario/usuario.service';
import { Usuario } from '../../models/usuario.models';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {
id :string;
public res: any = {
  exito: '',
  token: '',
  usuario: '',
}
usuario = Usuario;
  constructor( public _SidebarService: SidebarService ,private _service:LoginService,private _service_user: UsuarioService) { 

    this.id = localStorage.getItem('id');
     
    this._service_user.get_one_usuario(this.id).subscribe((data)=>{
      this.res = data;
      this.usuario = this.res.usuario;
      
       
    })

  }

  ngOnInit() {
  }

  public name = localStorage.getItem('nombre');


  salir(){
    this._service.salir();
  }
}
