import { Component, OnInit } from '@angular/core';
import { Productos } from '../../../models/producto.models';
import { ProductService } from 'src/app/Service/Productos/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  constructor(private _service: ProductService, private _route: Router, private params: ActivatedRoute) {
  }

  public id: string;
  public actulizar = false;
  ngOnInit() {
    this.id = this.params.snapshot.paramMap.get('id');
    if (this.id != null) {
      this.one_producto();
      this.actulizar = true;
    }
  }
  mensaje_error: string = "";
  error = true;

  mensaje_exito: string = "";
  exito = false;


  productos: Productos = {
    nombre: '',
    codigo: '',
    precio: 0,
    cantidad: 0,
    descripcion: '',
    estado: 1,
    id_categoria: '',
    img: '',
  }
  categoria: any = [
    {
      id_categoria: 1,
      categoria: 'Auto'
    },
    {
      id_categoria: 2,
      categoria: 'Motos'
    }
  ];

  public res: any = {
    exito: '',
    token: '',
    productos: '',
  }
  guardar(product: Productos) {
    console.log(this.productos);

    if (!this.actulizar) {
      this._service.crear_producto(product).subscribe((data) => {
        this.res = data;
        this.error = this.res.exito;
        this.exito = this.res.exito;
        if (this.res.exito) {

          this.mensaje_exito = 'Producto Creado Correctamente';
          setTimeout(() => {
            this._route.navigate(['/index_productos']);
            this.limpiar();
          }, 3000);
        } else {

          this.mensaje_error = this.res.err.message;
        }

      });
    } else {
      this._service.update_producto(product, this.id).subscribe((data) => {
        this.res = data;
        this.error = this.res.exito;
        this.exito = this.res.exito;
        if (this.res.exito) {

          this.mensaje_exito = 'Actualizado Correctamente';
          setTimeout(() => {
            this._route.navigate(['/index_productos']);
            this.limpiar();
          }, 3000);
        } else {

          this.mensaje_error = this.res.err.message;
        }
      });
    }
  }



  one_producto() {
    this._service.get_producto_id(this.id).subscribe((data) => {
      this.res = data;
      console.log(this.res);
      this.productos = this.res.productosDB;

    });
  }

  limpiar() {
    this.productos = {
      nombre: '',
      codigo: '',
      precio: 0,
      cantidad: 0,
      descripcion: '',
      estado: 1,
      id_categoria: '',
      img: '',
    }
  }

}
