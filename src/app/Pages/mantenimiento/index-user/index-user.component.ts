import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/Service/Usuario/usuario.service';
import { Usuario } from 'src/app/models/usuario.models';
import { rutaImagen } from '../../../URL/rutaImagen';
@Component({
  selector: 'app-index-user',
  templateUrl: './index-user.component.html',
  styleUrls: ['./index-user.component.css']
})
export class IndexUserComponent implements OnInit {
  usuario: Usuario;
  ruta = rutaImagen;
  public res: any = {
    exito: '',
    token: '',
    usuarioDB: '',
  }
  id:string;
  desde: number = 0;
  totalRegistros: number = 0;
  constructor(private _service: UsuarioService) {
    let desde = 0;
    this.llenar(desde);
  }

  ngOnInit() {
this.id = localStorage.getItem('id');
    
  }

  eliminar(id: string) {
    this._service.delete(id).subscribe((data) => {
      let desde = 0;
      this.llenar(desde);
    });
  }
  llenar(desde:any) {
    let desde_limit = desde || 0;
    this._service.get_all_user(desde_limit).subscribe((data) => {
      this.res = data;
      this.usuario = this.res.usuarioDB;
      this.totalRegistros = this.res.cantidad;
      
     
    });
  }


    cambiarDesde( valor: number ) {

    let desde = this.desde + valor;

    if ( desde >= this.totalRegistros ) {
      return;
    }

    if ( desde < 0 ) {
      return;
    }

    this.desde += valor;
    this.llenar(desde);

  }

}
