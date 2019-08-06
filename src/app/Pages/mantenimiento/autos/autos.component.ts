import { Component, OnInit } from '@angular/core';
import { AutoModel } from '../../../models/autos.models';
import { AutosService } from 'src/app/Service/service.index';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-autos',
  templateUrl: './autos.component.html',
  styleUrls: ['./autos.component.css']
})
export class AutosComponent implements OnInit {

  autos: AutoModel = {
    marca: '',
    modelo: '',
    anio: '',
    img: '',
    estado: true,
  }
  public res: any = {
    exito: '',
    token: '',
    auto: ''

  }
  imagenSubir:File;
  mensaje_error: string = "";
  error = true;

  mensaje_exito: string = "";
  exito = false;
  id: string;
  actualizar = false;
  habilitar = true;
  imagenTemp:any;
  constructor(private _service: AutosService, private _router: Router, private _params: ActivatedRoute) {
    this.id = _params.snapshot.paramMap.get('id');
    if (this.id != null) {
      _service.get_auto_id(this.id).subscribe((data) => {
        this.res = data;
        this.autos = this.res.auto;
        this.actualizar = true;
        console.log(this.autos);
      });
    }

  }

  ngOnInit() {
  }
  crear_auto(auto: AutoModel) {
    if (this.id != null) {

      this._service.update_auto(auto, this.id).subscribe((data) => {
        this.res = data;
        this.error = this.res.exito;
        this.exito = this.res.exito;
        if (this.res.exito) {

          this.mensaje_exito = 'Actualizada CorrectaMente';
          setTimeout(() => {
            this._router.navigate(['/autos']);
            this.limpiar();
          }, 3000);
        } else {

          this.mensaje_error = this.res.err.message;
        }
      });
    } else {
      this._service.create_autos(auto).subscribe((data) => {
        this.res = data;
        this.error = this.res.exito;
        this.exito = this.res.exito;
        if (this.res.exito) {

          this.mensaje_exito = 'Creado CorrectaMente';
          setTimeout(() => {
            this._router.navigate(['/autos']);
            this.limpiar();
          }, 3000);
        } else {

          this.mensaje_error = this.res.err.message;
        }
      });
    }
  }

  limpiar() {
    this.autos = {
      marca: '',
      modelo: '',
      anio: '',
      img: '',
      estado: true,
    }
  }


  seleccionImage(archivo: File){
    if ( !archivo ) {
      this.imagenSubir = null;
      return;
    }
    this.habilitar =false;
    this.imagenSubir = archivo;
 


    const reader = new FileReader();
    reader.onload = e => this.imagenTemp = reader.result;

    reader.readAsDataURL(archivo);

  }
  subir_imagen() {

    this._service.update_imagen(this.imagenSubir, this.id);
  }

}
