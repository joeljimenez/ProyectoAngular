import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/Service/service.index';
import { ActivatedRoute, Router } from '@angular/router';
import { Marcas } from 'src/app/models/marcas.model';
import { rutaImagen } from '../../../URL/rutaImagen';
@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css']
})
export class MarcasComponent implements OnInit {
  ruta = rutaImagen;
  actualizar = false;
  id: string;

  public marcas_res: Marcas = {
    marca: '',
    img: '',
  }

  public res: any = {
    exito: '',
    marcas: ''
  }
  error = true;

  exito = false;
  imagenSubir: File;
  imagenTemp: any;
  mensaje_exito: string;
  mensaje_error: any;
  constructor(private _service: CategoriasService, private _params: ActivatedRoute , private __router: Router) {
    this.id = _params.snapshot.paramMap.get('id');
    if (this.id != null) {
      _service.get_marcas_id(this.id).subscribe((data) => {
        this.res = data;
        this.marcas_res = this.res.marcas;
        this.actualizar = true;
      })
    }
  }

  ngOnInit() {
  }
  guardar(data: Marcas) {
    this._service.update_marcas(data, this.id).subscribe((data) => {
      this.res = data;
      this.error = this.res.exito;
      this.exito = this.res.exito;
      if (this.res.exito) {

        this.mensaje_exito = 'Marca Actualizada';
        setTimeout(() => {
          this.__router.navigate(['/marcas']);
          this.limpiar();
        }, 3000);
      } else {

        this.mensaje_error = this.res.err.message;
      }  
    });

  }
  limpiar() {
   
  }

  seleccionImage(archivo: File) {
    if (!archivo) {
      this.imagenSubir = null;
      return;
    }

    this.imagenSubir = archivo;



    const reader = new FileReader();
    reader.onload = e => this.imagenTemp = reader.result;

    reader.readAsDataURL(archivo);

  }
  subir_imagen() {
    this._service.update_imagen_marcas(this.imagenSubir, this.id);
  }

}
