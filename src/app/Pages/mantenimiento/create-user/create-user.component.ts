import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.models';
import { UsuarioService } from 'src/app/Service/Usuario/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import { rutaImagen } from '../../../URL/rutaImagen';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  id: string;
  ruta = rutaImagen;
  usuario: Usuario = {
    nombre: '',
    email: '',
    password: '',
    estado: true,
    direccion: '',
    edad: 18,
    role: '',
    img: '',
    google: false
  }
  public res: any = {
    exito: '',
    token: '',
    usuario: '',
  }


  role: any = [
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
  habilitar = true;
  actualizar = false;
  guardar = true;
  password_validacion: string;
  imagenSubir:File;
  imagenTemp:any;
  constructor(private _service: UsuarioService, private _router: Router, private _param: ActivatedRoute) {
    this.id = this._param.snapshot.paramMap.get('id');
    if (this.id != null) {
      this.get_user_one();
      this.actualizar = true;
    }

  }

  //objeto
  ngOnInit() {
  }

  validar() {
    if (this.usuario.password == this.password_validacion) {
      this.guardar = false;
    }
  }

  crear_user(usuario: Usuario) {
if(this.id !=null){
  this._service.update_user(usuario , this.id).subscribe((data)=>{
    this.res = data;
    this.error = this.res.exito;
    this.exito = this.res.exito;
    if (this.res.exito) {

      
      this.mensaje_exito = 'Usuario Actualizado Correctamente';
      setTimeout(() => {
        this.mensaje_exito  ="";
        this.exito = false;
        this._router.navigate(['/usuarios']);
        
      }, 3000);
    } else {

      this.mensaje_error = this.res.err.message;
    }
  });
}else{

  this._service.crear_usuario(usuario).subscribe((data) => {
    this.res = data;
    this.exito = this.res.extio;

    if (this.res.exito) {
      console.log(this.res);
      this.exito = true;
      this.mensaje_exito = 'Usuario Creado Correctamente';
      setTimeout(() => {
        this._router.navigate(['/usuarios']);
        this.limpiar();
      }, 3000);
    } else {
      this.error = false;
      this.mensaje_error = this.res.err.message;
    }

  });
}

  }

  get_user_one() {
    this._service.get_usuario_id(this.id).subscribe((data) => {
      this.res = data;
      this.usuario = this.res.usuario;
      console.log(this.usuario);
    });
  }



  limpiar() {
    this.usuario = {
      nombre: '',
      email: '',
      password: '',
      estado: true,
      direccion: '',
      edad: 18,
      role: '',
      img: '',
      google: false
    }
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
  actualizar_imagen() {
 
     this._service.update_imagen_user(this.imagenSubir, this.id);
   
    
  }

}
