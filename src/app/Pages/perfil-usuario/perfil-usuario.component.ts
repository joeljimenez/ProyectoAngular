import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/Service/Usuario/usuario.service';
import { Usuario } from '../../models/usuario.models';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {
id:string;
public res: any = {
  exito: '',
  token: '',
  usuario: '',
}
usuario = Usuario;

rol: any = [
  {
    id_rol: 1,
    nombre: 'ADMIN_ROLE'
  },
  {
    id_rol: 2,
    nombre: 'USER_ROLE'
  }
];
mensaje_error: string = "";
error = true;

mensaje_exito: string = "";
exito = false;
habilitar =true;
actualizar :boolean;
  parametro: any;
  public imagenSubir: File;
  imagenTemp: any;
  constructor(private _service: UsuarioService , private _route:Router , private params :ActivatedRoute) { 
    this.id = localStorage.getItem('id');
    this.parametro = params.snapshot.paramMap.get('id');
    
      this.one_user();
     this.actualizar =true;
  }

  ngOnInit() {
  }

  update_user(user : Usuario){
    this._service.update_user(user , this.id).subscribe((data)=>{
      this.res = data;
      this.error = this.res.exito;
      this.exito = this.res.exito;
      if (this.res.exito) {

        
        this.mensaje_exito = 'Usuario Actualizado Correctamente';
        setTimeout(() => {
          this.mensaje_exito  ="";
          this.exito = false;
          this._route.navigate(['/Perfil_usuario']);
          
        }, 3000);
      } else {

        this.mensaje_error = this.res.err.message;
      }
    });
  }
  one_user(){
    this._service.get_one_usuario(this.id).subscribe((data)=>{
      this.res = data;
      this.usuario = this.res.usuario;
      localStorage.setItem('nombre',this.res.usuario.nombre);
 });
  }


  seleccionImage(archivo: File){
    if ( !archivo ) {
      this.imagenSubir = null;
      return;
    }
    this.habilitar =false;
    this.imagenSubir = archivo;
 
    this.habilitar =false;

    const reader = new FileReader();
    reader.onload = e => this.imagenTemp = reader.result;

    reader.readAsDataURL(archivo);

  }
  subir_imagen() {
 
     this._service.update_imagen(this.imagenSubir, this.id);
   
    
  }

}
