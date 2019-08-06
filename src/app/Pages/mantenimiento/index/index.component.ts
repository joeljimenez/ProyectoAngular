import { Component, OnInit } from '@angular/core';
import { Productos } from 'src/app/models/producto.models';
import { ProductService } from 'src/app/Service/Productos/product.service';
import { Router } from '@angular/router';
import { rutaImagen } from '../../../URL/rutaImagen';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  ruta = rutaImagen;
  producto: any = [];
  public res: any = {
    exito: '',
    token: '',
    productos: '',
  }
  constructor(private _service: ProductService, private _router: Router) {
    this.llenar_tabla();

  }


  ngOnInit() {
  }

  eliminar(id: any) {
    this._service.delete(id).subscribe((res) => {
      this.res = res;
      if (this.res.exito) {
        this.llenar_tabla();
        this._router.navigate(['/index_productos']);
      } else {


      }
    })
  }


  llenar_tabla() {
    this._service.get_producto().subscribe((data) => {
      this.res = data;
      console.log(this.res.productos);
      this.producto = this.res.productos;
    });
  }

}
