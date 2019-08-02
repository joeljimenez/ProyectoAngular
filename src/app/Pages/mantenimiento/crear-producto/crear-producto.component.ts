import { Component, OnInit } from '@angular/core';
import { Productos } from '../../../models/producto.models';
import { ProductService } from 'src/app/Service/Productos/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoriasService } from 'src/app/Service/categoria/categorias.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  constructor(private _service: ProductService, 
    private _route: Router,
     private params: ActivatedRoute,
     private _service_categoria:CategoriasService) {
  }
  public imagenSubir: File;
  public id: string;
  public actualizar = false;
  ngOnInit() {
    this.id = this.params.snapshot.paramMap.get('id');
    if (this.id != null) {
      this.one_producto();
      this.actualizar = true;
    }

    this.get_all_categoria();
  }
  mensaje_error: string = "";
  error = true;

  mensaje_exito: string = "";
  exito = false;

  mensaje_subida :string;
  exito_subida = false;
  
  imagenTemp: any;
  habilitar =true;

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
  categoria: any = [];

  public res: any = {
    exito: '',
    token: '',
    productos: '',
  }

  get_all_categoria() {
    this._service_categoria.get_categorias().subscribe((data) => {
      this.res = data;
      this.categoria = this.res.categories;
      console.log(this.categoria);
    });
  }

  guardar(product: Productos) {
    

    if (!this.actualizar) {
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


  seleccionImageMasiva(archivo: File){
    console.log(archivo);
    if ( !archivo ) {
      this.imagenSubir = null;
      return;
    }
    
    this.imagenSubir = archivo;

  

  }
  subir_imagenMasiva() {
 
     this._service.subirArchivoMasivo(this.imagenSubir,'productosMasivo', this.id) 
     .then((resp: any) => {
      this.mensaje_subida = resp.message;
      this.exito_subida = resp.extio;
        setTimeout(() => {
          this.exito_subida = false;
        }, 3000);
      
 })
    .catch(resp => {
      console.log(resp);
       
    });
   
    
  }

  

}
