import { Component, OnInit } from '@angular/core';
import { Productos } from '../../../models/producto.models';
import { ProductService } from 'src/app/Service/Productos/product.service';
import { Router , ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  constructor(private _service: ProductService , private _route:Router , private params : ActivatedRoute) { }

public id:string;
public imagen = false;
  ngOnInit() {
// this.id = this.params.snapshot.paramMap.get('id');
// if(this.id !=null){
// this.imagen= true;
// }

  }
  mensaje_error:string  = "";
  error = true;

  mensaje_exito:string  = "";
  exito = false;

  productos: Productos = {
    nombre: '',
    codigo: '',
    precio: 0,
    cantidad: 0,
    descripcion: '',
    estado: 1,
    categoria: '',
    img: '',
  }
  categoria: any = [
    {
      id: 1,
      categoria: 'Auto'
    },
    {
      id: 2,
      categoria: 'Motos'
    }
  ];

  public res : any = {
    exito :  '',
    token:'', 
    producto:'',
  }
  guardar(product: Productos) {
    this._service.crear_producto(product).subscribe((data) => {
       this.res = data;
       this.error = this.res.exito;
       this.exito = this.res.exito;
      if(this.res.exito){
        
        this.mensaje_exito = 'Producto Creado Correctamente';
        setTimeout(() => {
          this._route.navigate(['/Dashboard']);
          this.limpiar();
        }, 4000);
      }else{
        
        this.mensaje_error = this.res.err.message; 
      }
     
    });
  }


  limpiar(){
    this.productos = {
      nombre: '',
      codigo: '',
      precio: 0,
      cantidad: 0,
      descripcion: '',
      estado: 1,
      categoria: '',
      img: '',
    }
  }

}
