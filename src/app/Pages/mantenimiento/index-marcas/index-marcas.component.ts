import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/Service/service.index';
import { Marcas } from '../../../models/marcas.model';
import { rutaImagen } from '../../../URL/rutaImagen';
@Component({
  selector: 'app-index-marcas',
  templateUrl: './index-marcas.component.html',
  styleUrls: ['./index-marcas.component.css']
})
export class IndexMarcasComponent implements OnInit {
  ruta  =rutaImagen;
  public marcas_res: Marcas = {
    marca: '',
    img: '',
  }
  res_marca = [];
  public res: any = {
    exito: '',
    marcas: ''
  }
  nombre: string;

  constructor(private _service: CategoriasService) {
    this.get_llenar();
  }

  ngOnInit() {
  }

  guardar() {

    this._service.create_marcas(this.marcas_res).subscribe((data) => {
      this.get_llenar();
    })

  }

  eliminar(id: string) {
    this._service.delete_marca(id).subscribe((data) => {
      this.get_llenar();
    })
  }

  get_llenar() {
    this._service.get_marcas().subscribe((marcas) => {
      this.res = marcas;
      this.res_marca = this.res.marcas;

    });
  }
}
