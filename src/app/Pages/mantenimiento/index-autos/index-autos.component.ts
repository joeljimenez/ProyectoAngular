import { Component, OnInit } from '@angular/core';
import { AutosService } from 'src/app/Service/service.index';
import { AutoModel } from '../../../models/autos.models';
import { rutaImagen } from '../../../URL/rutaImagen';
@Component({
  selector: 'app-index-autos',
  templateUrl: './index-autos.component.html',
  styleUrls: ['./index-autos.component.css']
})
export class IndexAutosComponent implements OnInit {
  autos: AutoModel;
  ruta = rutaImagen;

  public res: any = {
    exito: '', 
    token: '',
    autos: '',
  }
  constructor(private _service: AutosService) {
    this.llenar_tabla();
  }

  ngOnInit() { 
  }

  llenar_tabla() {
    this._service.get_autos().subscribe((data) => {
      this.res = data;
      this.autos = this.res.autos;
      console.log(this.autos);
    })
  }

  eliminar(id:any){
this._service.delete_auto(id).subscribe((data)=>{
  this.llenar_tabla();
})
  }

}
 