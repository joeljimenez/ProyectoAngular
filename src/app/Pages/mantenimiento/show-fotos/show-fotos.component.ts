import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Service/Productos/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-fotos',
  templateUrl: './show-fotos.component.html',
  styleUrls: ['./show-fotos.component.css']
})
export class ShowFotosComponent implements OnInit {
id:string;


public res: any = {
  exito: '',
  token: '',
  productos: '',
}
img  = [];

  constructor( private _service:ProductService , private _params : ActivatedRoute) { 
    this.id = this._params.snapshot.paramMap.get('id');
    this.show_imagen();
  }

  ngOnInit() {
  }

  show_imagen(){
    this._service.get_imagen_id(this.id).subscribe((data)=>{
      this.res = data;
      this.img = this.res.productos;
    })
  }

  eliminar(id:string){
this._service.delete_imagen(id).subscribe((data)=>{
  this.show_imagen()
})
  }

}
